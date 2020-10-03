const crypto = require('crypto')
const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')
const sharp = require('sharp')

const CACHE_FILE = path.join(process.cwd(), '.kamfly/images.json')
const CACHE = fs.existsSync(CACHE_FILE) ? fs.readJSONSync(CACHE_FILE) : {}

const configs = [
  {
    input: 'assets/images/blocks/*.+(jpg|jpeg|png)',
    output: '.kamfly/images/blocks',
    sizes: [{ w: 342 }, { w: 447 }, { w: 560 }],
    densities: [1, 2, 3],
  },
  {
    input: 'assets/images/blocks/*.+(jpg|jpeg|png)',
    output: '.kamfly/images/blocks',
    sizes: [{ w: 64 }],
    densities: [1],
  },
  {
    input: 'assets/images/cards/*.+(jpg|jpeg|png)',
    output: '.kamfly/images/cards',
    sizes: [{ w: 214 }],
    densities: [1, 2, 3],
  },
  {
    input: 'assets/images/cards/*.+(jpg|jpeg|png)',
    output: '.kamfly/images/cards',
    sizes: [{ w: 64 }],
    densities: [1],
  },
]

function getFileHash(filename) {
  return new Promise((resolve) => {
    const fd = fs.createReadStream(filename)
    const hash = crypto.createHash('sha1')
    hash.setEncoding('hex')

    fd.on('end', function () {
      hash.end()
      resolve(hash.read())
    })

    fd.pipe(hash)
  })
}

async function getPattern(config) {
  return {
    ...config,
    pattern: path.join(process.cwd(), config.input),
  }
}

function getMatches(config) {
  return new Promise(function (resolve, reject) {
    glob(config.pattern, function (err, matches) {
      err ? reject(err) : resolve({ ...config, matches })
    })
  })
}

function fileWithSize(file, { w, h }) {
  if (!w && !h) {
    return file
  }

  const ext = path.extname(file)

  if (w && h) {
    return file.replace(ext, `-${w}x${h}${ext}`)
  } else if (w) {
    return file.replace(ext, `-${w}w${ext}`)
  } else {
    return file.replace(ext, `-${h}h${ext}`)
  }
}

async function getJobs(config) {
  return config.matches.reduce((acc, next) => {
    for (const size of config.sizes) {
      for (const density of config.densities) {
        const variantSize = { w: size.w * density, h: size.h * density }

        const filename = fileWithSize(path.basename(next), variantSize)
        const output = path.join(process.cwd(), config.output, filename)

        acc.push({
          input: next,
          output,
          density,
          size: variantSize,
        })
      }
    }

    return acc
  }, [])
}

async function addFileHash(job) {
  const hash = await getFileHash(job.input)

  return {
    ...job,
    hash,
  }
}

async function removeCachedJobs(jobs) {
  const allJobs = await Promise.all(jobs.map(addFileHash))
  return allJobs.filter(
    (job) => !(job.output in CACHE) || job.hash !== CACHE[job.output]
  )
}

async function processJob(job) {
  return sharp(job.input)
    .resize({
      ...job.options,
      width: job.size.w || undefined,
      height: job.size.h || undefined,
    })
    .toFile(job.output)
}

async function addWebp(jobs) {
  const withWebp = jobs.reduce((acc, next) => {
    acc.push(next)

    const ext = path.extname(next.output)

    acc.push({
      ...next,
      output: next.output.replace(ext, '.webp'),
    })

    return acc
  }, [])

  return Promise.resolve(withWebp)
}

async function getJob(config) {
  return getPattern(config)
    .then(getMatches)
    .then(getJobs)
    .then(addWebp)
    .then(removeCachedJobs)
}

async function saveCache(jobs) {
  const newCache = jobs.reduce(function (acc, next) {
    acc[next.output] = next.hash
    return acc
  }, {})

  await fs.writeJSON(CACHE_FILE, {
    ...CACHE,
    ...newCache,
  })
}

async function run() {
  console.time('optimize images')

  const configJobs = await Promise.all(configs.map(getJob))

  const jobs = configJobs.flat()

  await Promise.all(configs.map(({ output }) => fs.ensureDir(output)))
  await Promise.all(jobs.map(processJob))

  await saveCache(jobs)

  console.timeLog('optimize images', ` - ${jobs.length} new images built`)
}

run()
