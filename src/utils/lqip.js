const fs = require('fs-extra')
const path = require('path')

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

module.exports = function (value, w, h = false) {
  const filename = path.join(
    process.cwd(),
    '.kamfly',
    fileWithSize(value, { w, h })
  )

  const buffer = fs.readFileSync(filename)
  return `data:image/png;base64,${buffer.toString('base64')}`
}
