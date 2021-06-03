import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';
import mdPlugin from 'vite-plugin-markdown';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItToc from 'markdown-it-table-of-contents';
import slugify from 'slugify';
import { resolve } from 'path';

/**
 * Override default markdown library
 */
function removeExtraText(s) {
	let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, '');
	newStr = newStr.replace(/⚠️/g, '');
	newStr = newStr.replace(/[?!]/g, '');
	newStr = newStr.replace(/<[^>]*>/g, '');
	return newStr;
}

function markdownItSlugify(s) {
	return slugify(removeExtraText(s), { lower: true, remove: /[:’'`,]/g });
}

const md = markdownIt({ html: true, breaks: true, linkify: true })
	.use(markdownItAnchor, {
		permalink: true,
		slugify: markdownItSlugify,
		permalinkBefore: false,
		permalinkClass: 'direct-link',
		permalinkSymbol: '',
		level: [1, 2, 3, 4]
	})
	.use(markdownItToc, {
		includeLevel: [2, 3],
		slugify: markdownItSlugify,
		format: function (header) {
			return removeExtraText(header);
		},
		transformLink: function (link) {
			// remove backticks from markdown code
			return link.replace(/\%60/g, '');
		}
	});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		router: false,

		vite: {
			build: {
				cssCodeSplit: false
			},
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
			}
		}
	}
};

export default config;
