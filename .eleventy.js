const navigationPlugin = require('@11ty/eleventy-navigation')
const seoPlugin = require('eleventy-plugin-seo')
const svgContentsPlugin = require('eleventy-plugin-svg-contents')
const { DateTime } = require('luxon')
const cssmin = require('./src/utils/cssmin')
const jsmin = require('./src/utils/jsmin')

const build = require('./src/_data/build')
const site = require('./src/_data/site.json')

module.exports = function (eleventyConfig) {
  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   *
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */
  eleventyConfig.setDataDeepMerge(true)

  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./assets')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.dev/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ assets: '/' })

  /**
   * Add filters
   *
   * @link https://www.11ty.dev/docs/filters/
   */
  eleventyConfig.addFilter('dateDisplay', (dateObj, format = 'LLL d, y') => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat(format)
  })
  eleventyConfig.addFilter('cssmin', cssmin)
  eleventyConfig.addNunjucksAsyncFilter('jsmin', jsmin)

  /**
   * Add plugins
   *
   * @link https://www.11ty.devo/docs/plugins/
   */
  eleventyConfig.addPlugin(navigationPlugin)
  eleventyConfig.addPlugin(svgContentsPlugin)
  eleventyConfig.addPlugin(seoPlugin, {
    title: site.name,
    description: site.description,
    url: site.url,
    author: site.author,
    image: site.images.social,
    ogtype: 'website',
    options: { titleDivider: '|' },
  })

  return {
    templateFormats: ['md', 'njk', 'html', '11ty.js'],

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
    },
  }
}
