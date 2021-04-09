const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const { imagetools } = require('vite-imagetools');
const mdPlugin = require('vite-plugin-markdown');
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItToc = require('markdown-it-table-of-contents')
const slugify = require('slugify')
const { resolve } = require('path');
const pkg = require('./package.json');

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

const md = markdownIt({ html: true, breaks: true, linkify: true })
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
    });

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: static(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		router: false,

		vite: {
			plugins: [
				imagetools({ force: true }),
				mdPlugin.plugin({
					mode: [mdPlugin.Mode.HTML],
					markdownIt: md
				})
			],
			resolve: {
				alias: {
					$actions: resolve('src/actions'),
					$assets: resolve('src/assets')
				}
			},
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
