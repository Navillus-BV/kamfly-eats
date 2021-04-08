const imgSrc = require('./imgSrc')

module.exports = function (value, width = false, height = false, webp = false, avif = false) {
  const densities = [1, 2, 3]

  return densities
    .map(
      (d) => `${imgSrc(value, width * d, height * d, webp, avif)}${d == 1 ? '' : `@${d}x`}`
    )
    .join(', ')
}
