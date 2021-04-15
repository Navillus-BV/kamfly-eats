/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare type CallToAction = {
	href: string;
	title: string;
};

declare module '*.md' {
	// "unknown" would be more detailed depends on how you structure frontmatter
	const attributes: Record<string, unknown>;

	// When "Mode.TOC" is requested
	const toc: { level: string; content: string }[];

	// When "Mode.HTML" is requested
	const html: string;

	// When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
	import React from 'react';
	const react: React.VFC;

	// When "Mode.Vue" is requested
	import { ComponentOptions } from 'vue';
	const vue: ComponentOptions;

	// Modify below per your usage
	export { attributes, toc, html, react, vue };
}
