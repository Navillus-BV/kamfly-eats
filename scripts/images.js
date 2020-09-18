const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')
const sharp = require('sharp')

const configs = [
  {
    input: 'assets/images/blocks/*.+(jpg|jpeg|png)',
    output: '.cache/images/blocks',
    sizes: [{ w: 342 }, { w: 447 }, { w: 560 }],
    densities: [1, 2],
  },
  {
    input: 'assets/images/blocks/*.+(jpg|jpeg|png)',
    output: '.cache/images/blocks',
    sizes: [{ w: 64 }],
    densities: [1],
  },
]

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
  return config.matches
    .map((input) =>
      config.sizes
        .map((size) => ({ input, size }))
        .map((job) =>
          config.densities.map((density) => ({
            input: job.input,
            options: config.options,
            density,
            size: { w: job.size.w * density, h: job.size.h * density },
          }))
        )
        .flat()
        .map((job) => {
          const filename = path.basename(job.input)
          const sizeFilename = fileWithSize(filename, job.size)
          const output = path.join(process.cwd(), config.output, sizeFilename)
          return {
            ...job,
            output,
          }
        })
    )
    .flat()
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
  return getPattern(config).then(getMatches).then(getJobs).then(addWebp)
}

async function run() {
  console.time('optimize images')

  const configJobs = await Promise.all(configs.map(getJob))

  const jobs = configJobs.flat()

  await Promise.all(configs.map(({ output }) => fs.ensureDir(output)))
  await Promise.all(jobs.map(processJob))

  console.timeLog('optimize images')
}

run()
