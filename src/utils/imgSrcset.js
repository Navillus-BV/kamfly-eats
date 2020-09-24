const imgSrc = require('./imgSrc')

module.exports = function (value, width = false, height = false) {
  const densities = [1, 2, 3]

  return densities
    .map(
      (d) => `${imgSrc(value, width * d, height * d)}${d == 1 ? '' : `@${d}x`}`
    )
    .join(', ')
}
