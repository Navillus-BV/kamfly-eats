export interface ImageSource {
    type: string;
    srcset?: string;
    media?: string;
    src?: string;
}

export interface ResponsiveImage {
    sources: ImageSource[];
    defaultSource: ImageSource;
    alt: string;
}

function combineDensities(srcset: string) {
    const [a, b] = srcset.split(', ');
    return `${a}, ${b} 2x`;
};

export type BlockImageParams = {
    avif342: string,
    webp342: string,
    png342: string,
    avif447: string,
    webp447: string,
    png447: string,
    avif560: string,
    webp560: string,
    png560: string
}

function blockImage(params: BlockImageParams, alt: string): ResponsiveImage {
    const { avif342, webp342, png342, avif447, webp447, png447, avif560, webp560, png560 } = params;

    return {
        sources: [
            {
                type: 'image/avif',
                media: '(min-width: 592px)',
                srcset: combineDensities(avif560)
            },
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
                type: 'image/avif',
                media: '(min-width: 374px)',
                srcset: combineDensities(avif447)
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
                type: 'image/avif',
                srcset: combineDensities(avif342)
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
        alt
    }
}

import shoppingAvif342 from '$assets/blocks/shopping.png?width=342;684&avif&srcset';
import shoppingWebp342 from '$assets/blocks/shopping.png?width=342;684&webp&srcset';
import shoppingPng342 from '$assets/blocks/shopping.png?width=342;684&png&srcset';
import shoppingAvif447 from '$assets/blocks/shopping.png?width=447;894&avif&srcset';
import shoppingWebp447 from '$assets/blocks/shopping.png?width=447;894&webp&srcset';
import shoppingPng447 from '$assets/blocks/shopping.png?width=447;894&png&srcset';
import shoppingAvif560 from '$assets/blocks/shopping.png?width=560;1120&avif&srcset';
import shoppingWebp560 from '$assets/blocks/shopping.png?width=560;1120&webp&srcset';
import shoppingPng560 from '$assets/blocks/shopping.png?width=560;1120&png&srcset';

const shopping = blockImage(
    {
        webp560: shoppingWebp560,
        webp447: shoppingWebp447,
        webp342: shoppingWebp342,
        png560: shoppingPng560,
        png447: shoppingPng447,
        png342: shoppingPng342,
        avif560: shoppingAvif560,
        avif447: shoppingAvif447,
        avif342: shoppingAvif342
    },
    "Screenshots of Kamfly's menu and online ordering system."
);

import cmsAvif342 from '$assets/blocks/cms.png?width=342;684&avif&srcset';
import cmsWebp342 from '$assets/blocks/cms.png?width=342;684&webp&srcset';
import cmsPng342 from '$assets/blocks/cms.png?width=342;684&png&srcset';
import cmsAvif447 from '$assets/blocks/cms.png?width=447;894&avif&srcset';
import cmsWebp447 from '$assets/blocks/cms.png?width=447;894&webp&srcset';
import cmsPng447 from '$assets/blocks/cms.png?width=447;894&png&srcset';
import cmsAvif560 from '$assets/blocks/cms.png?width=560;1120&avif&srcset';
import cmsWebp560 from '$assets/blocks/cms.png?width=560;1120&webp&srcset';
import cmsPng560 from '$assets/blocks/cms.png?width=560;1120&png&srcset';

const cms = blockImage(
    {
        webp560: cmsWebp560,
        webp447: cmsWebp447,
        webp342: cmsWebp342,
        png560: cmsPng560,
        png447: cmsPng447,
        png342: cmsPng342,
        avif560: cmsAvif560,
        avif447: cmsAvif447,
        avif342: cmsAvif342
    },
    "Screenshots of Kamfly's menu management system."
);

import covidAvif342 from '$assets/blocks/covid-response.jpg?width=342;684&avif&srcset';
import covidWebp342 from '$assets/blocks/covid-response.jpg?width=342;684&webp&srcset';
import covidPng342 from '$assets/blocks/covid-response.jpg?width=342;684&jpg&srcset';
import covidAvif447 from '$assets/blocks/covid-response.jpg?width=447;894&avif&srcset';
import covidWebp447 from '$assets/blocks/covid-response.jpg?width=447;894&webp&srcset';
import covidPng447 from '$assets/blocks/covid-response.jpg?width=447;894&jpg&srcset';
import covidAvif560 from '$assets/blocks/covid-response.jpg?width=560;1120&avif&srcset';
import covidWebp560 from '$assets/blocks/covid-response.jpg?width=560;1120&webp&srcset';
import covidPng560 from '$assets/blocks/covid-response.jpg?width=560;1120&jpg&srcset';

const covid = blockImage(
    {
        webp560: covidWebp560,
        webp447: covidWebp447,
        webp342: covidWebp342,
        png560: covidPng560,
        png447: covidPng447,
        png342: covidPng342,
        avif560: covidAvif560,
        avif447: covidAvif447,
        avif342: covidAvif342
    },
    'Sign that says "Not Today #Covid19"'
);

import snipcartAvif342 from '$assets/blocks/snipcart-logo.png?width=342;684&avif&srcset';
import snipcartWebp342 from '$assets/blocks/snipcart-logo.png?width=342;684&webp&srcset';
import snipcartPng342 from '$assets/blocks/snipcart-logo.png?width=342;684&jpg&srcset';
import snipcartAvif447 from '$assets/blocks/snipcart-logo.png?width=447;894&avif&srcset';
import snipcartWebp447 from '$assets/blocks/snipcart-logo.png?width=447;894&webp&srcset';
import snipcartPng447 from '$assets/blocks/snipcart-logo.png?width=447;894&jpg&srcset';
import snipcartAvif560 from '$assets/blocks/snipcart-logo.png?width=560;1120&avif&srcset';
import snipcartWebp560 from '$assets/blocks/snipcart-logo.png?width=560;1120&webp&srcset';
import snipcartPng560 from '$assets/blocks/snipcart-logo.png?width=560;1120&jpg&srcset';

const snipcart = blockImage(
    {
        webp560: snipcartWebp560,
        webp447: snipcartWebp447,
        webp342: snipcartWebp342,
        png560: snipcartPng560,
        png447: snipcartPng447,
        png342: snipcartPng342,
        avif560: snipcartAvif560,
        avif447: snipcartAvif447,
        avif342: snipcartAvif342
    },
    'Snipcart logo'
);

import openAvif342 from '$assets/blocks/open-sign.jpg?width=342;684&avif&srcset';
import openWebp342 from '$assets/blocks/open-sign.jpg?width=342;684&webp&srcset';
import openPng342 from '$assets/blocks/open-sign.jpg?width=342;684&jpg&srcset';
import openAvif447 from '$assets/blocks/open-sign.jpg?width=447;894&avif&srcset';
import openWebp447 from '$assets/blocks/open-sign.jpg?width=447;894&webp&srcset';
import openPng447 from '$assets/blocks/open-sign.jpg?width=447;894&jpg&srcset';
import openAvif560 from '$assets/blocks/open-sign.jpg?width=560;1120&avif&srcset';
import openWebp560 from '$assets/blocks/open-sign.jpg?width=560;1120&webp&srcset';
import openPng560 from '$assets/blocks/open-sign.jpg?width=560;1120&jpg&srcset';

const open = blockImage(
    {
        webp560: openWebp560,
        webp447: openWebp447,
        webp342: openWebp342,
        png560: openPng560,
        png447: openPng447,
        png342: openPng342,
        avif560: openAvif560,
        avif447: openAvif447,
        avif342: openAvif342
    },
    'Open sign hanging in restaurant window'
);

const blocks = {
    cms,
    covid,
    open,
    shopping,
    snipcart
}

interface CardImageParams {
    webp214: string,
    jpg214: string
}
function cardImage(params: CardImageParams, alt: string): ResponsiveImage {
    const { webp214, jpg214 } = params;

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
        alt
    }
}

import sarahWebp214 from '$assets/cards/sarah.jpg?width=214;428&webp&srcset';
import sarahJpg214 from '$assets/cards/sarah.jpg?width=214;428&srcset';

const sarah = cardImage(
    {
        webp214: sarahWebp214,
        jpg214: sarahJpg214
    },
    "Sarah"
)

import tonyWebp214 from '$assets/cards/tony.jpg?width=214;428&webp&srcset';
import tonyJpg214 from '$assets/cards/tony.jpg?width=214;428&srcset';

const tony = cardImage(
    {
        webp214: tonyWebp214,
        jpg214: tonyJpg214
    },
    "Tony"
)

const cards = {
    sarah,
    tony
}

interface PartnerImageParams {
    webp64: string,
    png64: string
}
function partnerImage(params: PartnerImageParams, alt: string): ResponsiveImage {
    const { webp64, png64 } = params;

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
        alt
    }
}

import githubWebp64 from '$assets/partners/github-logo.png?height=64;128&webp&srcset';
import githubPng64 from '$assets/partners/github-logo.png?height=64;128&png&srcset';

const github = partnerImage(
    {
        webp64: githubWebp64,
        png64: githubPng64
    },
    "Github"
)

import netlifyWebp64 from '$assets/partners/netlify-logo.png?height=64;128&webp&srcset';
import netlifyPng64 from '$assets/partners/netlify-logo.png?height=64;128&png&srcset';

const netlify = partnerImage(
    {
        webp64: netlifyWebp64,
        png64: netlifyPng64
    },
    "Netlify"
)

import snipcartWebp64 from '$assets/partners/snipcart-logo.png?height=64;128&webp&srcset';
import snipcartPng64 from '$assets/partners/snipcart-logo.png?height=64;128&png&srcset';

const snipcartPartner = partnerImage(
    {
        webp64: snipcartWebp64,
        png64: snipcartPng64
    },
    "Snipcart"
)

const partners = {
    github,
    netlify,
    snipcart: snipcartPartner
}

const images = {
    blocks,
    cards,
    partners
}

export default images