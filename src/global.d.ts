/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare type CallToAction = {
    href: string;
    title: string;
    external?: boolean;
}