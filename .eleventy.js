const navigationPlugin = require('@11ty/eleventy-navigation')
const imagePlugin = require('@navillus/eleventy-plugin-image')
const manifestPlugin = require('@navillus/eleventy-plugin-manifest')
const pwaPlugin = require('eleventy-plugin-pwa')
const seoPlugin = require('eleventy-plugin-seo')
const svgContentsPlugin = require('eleventy-plugin-svg-contents')
const { DateTime } = require('luxon')

const build = require('./site/_data/build')
const site = require('./site/_data/site.json')

module.exports = function (eleventyConfig) {
  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   *
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */

  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.dev/docs/copy/
   */

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

  /**
   * Add plugins
   *
   * @link https://www.11ty.devo/docs/plugins/
   */
  eleventyConfig.addPlugin(navigationPlugin)
  eleventyConfig.addPlugin(pwaPlugin)
  eleventyConfig.addPlugin(svgContentsPlugin)
  eleventyConfig.addPlugin(imagePlugin, {
    input: 'static',
    output: '_output',
    include: ['/uploads/blocks/*.+(jpg|jpeg|png)'],
    sizes: [224, 448, 896],
  })
  eleventyConfig.addPlugin(seoPlugin, {
    title: site.name,
    description: site.description,
    url: site.url,
    author: site.author,
    image: site.images.social,
    ogtype: 'website',
    options: { titleDivider: '|' },
  })
  eleventyConfig.addPlugin(manifestPlugin, {
    output: '_output',
    name: site.name,
    short_name: site.name,
    icon: site.images.favicon,
  })

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
