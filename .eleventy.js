const navigationPlugin = require('@11ty/eleventy-navigation')
const seoPlugin = require('eleventy-plugin-seo')
const svgContentsPlugin = require('eleventy-plugin-svg-contents')
const { DateTime } = require('luxon')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItToc = require('markdown-it-table-of-contents')
const slugify = require('slugify')

const cssmin = require('./src/utils/cssmin')
const jsmin = require('./src/utils/jsmin')
const htmlmin = require('./src/utils/htmlmin')
const imgSrc = require('./src/utils/imgSrc')
const imgSrcset = require('./src/utils/imgSrcset')
const lqip = require('./src/utils/lqip')

const build = require('./src/_data/build')
const site = require('./src/_data/site.json')

module.exports = function (eleventyConfig) {
  /**
   * Override default markdown library
   */
  function removeExtraText(s) {
    let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, '')
    newStr = newStr.replace(/⚠️/g, '')
    newStr = newStr.replace(/[?!]/g, '')
    newStr = newStr.replace(/<[^>]*>/g, '')
    return newStr
  }

  function markdownItSlugify(s) {
    return slugify(removeExtraText(s), { lower: true, remove: /[:’'`,]/g })
  }

  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItAnchor, {
      permalink: true,
      slugify: markdownItSlugify,
      permalinkBefore: false,
      permalinkClass: 'direct-link',
      permalinkSymbol: '',
      level: [1, 2, 3, 4],
    })
    .use(markdownItToc, {
      includeLevel: [2, 3],
      slugify: markdownItSlugify,
      format: function (header) {
        return removeExtraText(header)
      },
      transformLink: function (link) {
        // remove backticks from markdown code
        return link.replace(/\%60/g, '')
      },
    })

  eleventyConfig.setLibrary('md', md)

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
  eleventyConfig.addPassthroughCopy({
    assets: '/',
    '.cache': '/',
  })

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
  eleventyConfig.addFilter('imgSrc', imgSrc)
  eleventyConfig.addFilter('imgSrcset', imgSrcset)
  eleventyConfig.addFilter('lqip', lqip)

  /**
   * Add plugins
   *
   * @link https://www.11ty.dev/docs/plugins/
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

  /**
   * Add transforms
   *
   * @link https://www.11ty.dev/docs/transforms/
   */
  eleventyConfig.addTransform('htmlmin', htmlmin)

  return {
    templateFormats: ['md', 'njk', 'html', '11ty.js'],

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
    },
  }
}
