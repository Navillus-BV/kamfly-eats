export interface ImageSource {
	type: string;
	srcset?: string;
	media?: string;
	src?: string;
}

export interface ImageMetadata {
	width: number;
	height: number;
}

export interface ResponsiveImage {
	sources: ImageSource[];
	defaultSource: ImageSource;
	alt: string;
	metadata: ImageMetadata;
}

function combineDensities(srcset: string) {
	const [a, b] = srcset.split(', ');
	return `${a}, ${b}`;
}

export type BlockImageParams = {
	webp342: string;
	png342: string;
	webp447: string;
	png447: string;
	webp560: string;
	png560: string;
	metadata: {
		height: number;
		width: number;
	};
};

function blockImage(params: BlockImageParams, alt: string): ResponsiveImage {
	const { webp342, png342, webp447, png447, webp560, png560, metadata } = params;

	return {
		sources: [
			{
				type: 'image/webp',
				media: '(min-width: 592px)',
				srcset: combineDensities(webp560)
			},
			{
				type: 'image/png',
				media: '(min-width: 592px)',
				srcset: combineDensities(png560)
			},
			{
				type: 'image/webp',
				media: '(min-width: 374px)',
				srcset: combineDensities(webp447)
			},
			{
				type: 'image/png',
				media: '(min-width: 374px)',
				srcset: combineDensities(png447)
			},
			{
				type: 'image/webp',
				srcset: combineDensities(webp342)
			},
			{
				type: 'image/png',
				srcset: combineDensities(png342)
			}
		],
		defaultSource: {
			type: 'image/png',
			src: png342.split(', ')[0].split(' ')[0]
		},
		alt,
		metadata
	};
}

import shoppingWebp342 from '$assets/blocks/shopping.png?width=342;684&webp&srcset';
import shoppingPng342 from '$assets/blocks/shopping.png?width=342;684&png&srcset';
import shoppingWebp447 from '$assets/blocks/shopping.png?width=447;894&webp&srcset';
import shoppingPng447 from '$assets/blocks/shopping.png?width=447;894&png&srcset';
import shoppingWebp560 from '$assets/blocks/shopping.png?width=560;1120&webp&srcset';
import shoppingPng560 from '$assets/blocks/shopping.png?width=560;1120&png&srcset';
import shoppingMeta from '$assets/blocks/shopping.png?width=560&png&metadata';

const shopping = blockImage(
	{
		webp560: shoppingWebp560,
		webp447: shoppingWebp447,
		webp342: shoppingWebp342,
		png560: shoppingPng560,
		png447: shoppingPng447,
		png342: shoppingPng342,
		metadata: shoppingMeta
	},
	"Screenshots of Kamfly's menu and online ordering system."
);

import cmsWebp342 from '$assets/blocks/cms.png?width=342;684&webp&srcset';
import cmsPng342 from '$assets/blocks/cms.png?width=342;684&png&srcset';
import cmsWebp447 from '$assets/blocks/cms.png?width=447;894&webp&srcset';
import cmsPng447 from '$assets/blocks/cms.png?width=447;894&png&srcset';
import cmsWebp560 from '$assets/blocks/cms.png?width=560;1120&webp&srcset';
import cmsPng560 from '$assets/blocks/cms.png?width=560;1120&png&srcset';
import cmsMeta from '$assets/blocks/cms.png?width=560&png&metadata';

const cms = blockImage(
	{
		webp560: cmsWebp560,
		webp447: cmsWebp447,
		webp342: cmsWebp342,
		png560: cmsPng560,
		png447: cmsPng447,
		png342: cmsPng342,
		metadata: cmsMeta
	},
	"Screenshots of Kamfly's menu management system."
);

import dashboardWebp342 from '$assets/blocks/dashboard.png?width=342;684&webp&srcset';
import dashboardPng342 from '$assets/blocks/dashboard.png?width=342;684&png&srcset';
import dashboardWebp447 from '$assets/blocks/dashboard.png?width=447;894&webp&srcset';
import dashboardPng447 from '$assets/blocks/dashboard.png?width=447;894&png&srcset';
import dashboardWebp560 from '$assets/blocks/dashboard.png?width=560;1120&webp&srcset';
import dashboardPng560 from '$assets/blocks/dashboard.png?width=560;1120&png&srcset';
import dashboardMeta from '$assets/blocks/dashboard.png?width=560&png&metadata';

const dashboard = blockImage(
	{
		webp560: dashboardWebp560,
		webp447: dashboardWebp447,
		webp342: dashboardWebp342,
		png560: dashboardPng560,
		png447: dashboardPng447,
		png342: dashboardPng342,
		metadata: dashboardMeta
	},
	"Screenshots of Kamfly's menu management system"
);

import deliveryWebp342 from '$assets/blocks/food-delivery.jpg?width=342;684&webp&srcset';
import deliveryPng342 from '$assets/blocks/food-delivery.jpg?width=342;684&jpg&srcset';
import deliveryWebp447 from '$assets/blocks/food-delivery.jpg?width=447;894&webp&srcset';
import deliveryPng447 from '$assets/blocks/food-delivery.jpg?width=447;894&jpg&srcset';
import deliveryWebp560 from '$assets/blocks/food-delivery.jpg?width=560;1120&webp&srcset';
import deliveryPng560 from '$assets/blocks/food-delivery.jpg?width=560;1120&jpg&srcset';
import deliveryMeta from '$assets/blocks/food-delivery.jpg?width=560&jpg&metadata';

const delivery = blockImage(
	{
		webp560: deliveryWebp560,
		webp447: deliveryWebp447,
		webp342: deliveryWebp342,
		png560: deliveryPng560,
		png447: deliveryPng447,
		png342: deliveryPng342,
		metadata: deliveryMeta
	},
	'Delivery driver picking up an order.'
);

import menusWebp342 from '$assets/blocks/menus.png?width=342;684&webp&srcset';
import menusPng342 from '$assets/blocks/menus.png?width=342;684&png&srcset';
import menusWebp447 from '$assets/blocks/menus.png?width=447;894&webp&srcset';
import menusPng447 from '$assets/blocks/menus.png?width=447;894&png&srcset';
import menusWebp560 from '$assets/blocks/menus.png?width=560;1120&webp&srcset';
import menusPng560 from '$assets/blocks/menus.png?width=560;1120&png&srcset';
import menusMeta from '$assets/blocks/menus.png?width=560&png&metadata';

const menus = blockImage(
	{
		webp560: menusWebp560,
		webp447: menusWebp447,
		webp342: menusWebp342,
		png560: menusPng560,
		png447: menusPng447,
		png342: menusPng342,
		metadata: menusMeta
	},
	'Kamfly menus showing the light and dark theme options'
);

import openWebp342 from '$assets/blocks/open-sign.jpg?width=342;684&webp&srcset';
import openPng342 from '$assets/blocks/open-sign.jpg?width=342;684&jpg&srcset';
import openWebp447 from '$assets/blocks/open-sign.jpg?width=447;894&webp&srcset';
import openPng447 from '$assets/blocks/open-sign.jpg?width=447;894&jpg&srcset';
import openWebp560 from '$assets/blocks/open-sign.jpg?width=560;1120&webp&srcset';
import openPng560 from '$assets/blocks/open-sign.jpg?width=560;1120&jpg&srcset';
import openMeta from '$assets/blocks/open-sign.jpg?width=560&jpg&metadata';

const open = blockImage(
	{
		webp560: openWebp560,
		webp447: openWebp447,
		webp342: openWebp342,
		png560: openPng560,
		png447: openPng447,
		png342: openPng342,
		metadata: openMeta
	},
	'Open sign hanging in restaurant window'
);

import snipcartWebp342 from '$assets/blocks/snipcart-logo.png?width=342;684&webp&srcset';
import snipcartPng342 from '$assets/blocks/snipcart-logo.png?width=342;684&png&srcset';
import snipcartWebp447 from '$assets/blocks/snipcart-logo.png?width=447;894&webp&srcset';
import snipcartPng447 from '$assets/blocks/snipcart-logo.png?width=447;894&png&srcset';
import snipcartWebp560 from '$assets/blocks/snipcart-logo.png?width=560;1120&webp&srcset';
import snipcartPng560 from '$assets/blocks/snipcart-logo.png?width=560;1120&png&srcset';
import snipcartMeta from '$assets/blocks/snipcart-logo.png?width=560&png&metadata';

const snipcart = blockImage(
	{
		webp560: snipcartWebp560,
		webp447: snipcartWebp447,
		webp342: snipcartWebp342,
		png560: snipcartPng560,
		png447: snipcartPng447,
		png342: snipcartPng342,
		metadata: snipcartMeta
	},
	'Snipcart logo'
);

const blocks = {
	cms,
	dashboard,
	delivery,
	menus,
	open,
	shopping,
	snipcart
};

interface CardImageParams {
	webp214: string;
	jpg214: string;
	metadata: ImageMetadata;
}
function cardImage(params: CardImageParams, alt: string): ResponsiveImage {
	const { webp214, jpg214, metadata } = params;

	return {
		sources: [
			{
				type: 'image/webp',
				srcset: combineDensities(webp214)
			},
			{
				type: 'image/jpg',
				srcset: combineDensities(jpg214)
			}
		],
		defaultSource: {
			type: 'image/jpg',
			src: jpg214.split(', ')[0].split(' ')[0]
		},
		alt,
		metadata
	};
}

import sarahWebp214 from '$assets/cards/sarah.jpg?width=214;428&webp&srcset';
import sarahJpg214 from '$assets/cards/sarah.jpg?width=214;428&jpg&srcset';
import sarahMeta from '$assets/cards/sarah.jpg?width=214&jpg&metadata';

const sarah = cardImage(
	{
		webp214: sarahWebp214,
		jpg214: sarahJpg214,
		metadata: sarahMeta
	},
	'Sarah'
);

import tonyWebp214 from '$assets/cards/tony.jpg?width=214;428&webp&srcset';
import tonyJpg214 from '$assets/cards/tony.jpg?width=214;428&jpg&srcset';
import tonyMeta from '$assets/cards/tony.jpg?width=214&jpg&metadata';

const tony = cardImage(
	{
		webp214: tonyWebp214,
		jpg214: tonyJpg214,
		metadata: tonyMeta
	},
	'Tony'
);

const cards = {
	sarah,
	tony
};

interface PartnerImageParams {
	webp64: string;
	png64: string;
	metadata: ImageMetadata;
}
function partnerImage(params: PartnerImageParams, alt: string): ResponsiveImage {
	const { webp64, png64, metadata } = params;

	return {
		sources: [
			{
				type: 'image/webp',
				srcset: combineDensities(webp64)
			},
			{
				type: 'image/png',
				srcset: combineDensities(png64)
			}
		],
		defaultSource: {
			type: 'image/png',
			src: png64.split(', ')[0].split(' ')[0]
		},
		alt,
		metadata
	};
}

import githubWebp64 from '$assets/partners/github-logo.png?height=64;128&webp&srcset';
import githubPng64 from '$assets/partners/github-logo.png?height=64;128&png&srcset';
import githubMeta from '$assets/partners/github-logo.png?height=64&png&metadata';

const github = partnerImage(
	{
		webp64: githubWebp64,
		png64: githubPng64,
		metadata: githubMeta
	},
	'Github'
);

import netlifyWebp64 from '$assets/partners/netlify-logo.png?height=64;128&webp&srcset';
import netlifyPng64 from '$assets/partners/netlify-logo.png?height=64;128&png&srcset';
import netlifyMeta from '$assets/partners/netlify-logo.png?height=64&png&metadata';

const netlify = partnerImage(
	{
		webp64: netlifyWebp64,
		png64: netlifyPng64,
		metadata: netlifyMeta
	},
	'Netlify'
);

import snipcartWebp64 from '$assets/partners/snipcart-logo.png?height=64;128&webp&srcset';
import snipcartPng64 from '$assets/partners/snipcart-logo.png?height=64;128&png&srcset';
import snipcartPartnerMeta from '$assets/partners/snipcart-logo.png?height=64&png&metadata';

const snipcartPartner = partnerImage(
	{
		webp64: snipcartWebp64,
		png64: snipcartPng64,
		metadata: snipcartPartnerMeta
	},
	'Snipcart'
);

const partners = {
	github,
	netlify,
	snipcart: snipcartPartner
};

const images = {
	blocks,
	cards,
	partners
};

export default images;
