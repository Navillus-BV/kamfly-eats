const path = require('path')

module.exports = function (value, width = false, height = false, webp = false) {
  const ext = path.extname(value)
  const newExt = webp ? '.webp' : ext

  if (width && height) {
    return value.replace(ext, `-${width}x${height}${newExt}`)
  } else if (width) {
    return value.replace(ext, `-${width}w${newExt}`)
  } else {
    return value.replace(ext, `-${height}h${newExt}`)
  }
}
