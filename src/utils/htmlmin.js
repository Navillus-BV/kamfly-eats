const htmlmin = require('html-minifier')

module.exports = function (content, outputPath) {
  return outputPath.endsWith('.html')
    ? htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    : content
}
