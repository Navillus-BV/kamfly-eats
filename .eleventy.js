module.exports = function (eleventyConfig) {
  return {
    templateFormats: ['md', 'njk', 'html', '11ty.js'],

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'site',
      includes: '_includes',
      output: '_output',
      data: '_data',
    },
  }
}
