const fs = require('fs-extra')
const path = require('path')
const site = require('../src/_data/site.json')

const OUTPUT = '/favicons'
const FULL_OUTPUT = path.join(process.cwd(), 'assets', OUTPUT)
const HTML_TEMPLATE = path.join(
  process.cwd(),
  'src/_includes/partials/favicon.njk'
)

var favicons = require('favicons'),
  source = 'assets/favicon.svg', // Source image(s). `string`, `buffer` or array of `string`
  configuration = {
    path: OUTPUT, // Path for overriding default icons path. `string`
    appName: site.name, // Your application's name. `string`
    appShortName: site.name, // Your application's short_name. `string`. Optional. If not set, appName will be used
    appDescription: site.description, // Your application's description. `string`
    developerName: null, // Your (or your developer's) name. `string`
    developerURL: null, // Your (or your developer's) URL. `string`
    dir: 'auto', // Primary text direction for name, short_name, and description
    lang: 'en-US', // Primary language for name and short_name
    background: '#fff', // Background colour for flattened icons. `string`
    theme_color: '#fff', // Theme color user for example in Android's task switcher. `string`
    appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
    display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
    orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
    scope: '/', // set of URLs that the browser considers within your app
    start_url: '/?homescreen=1', // Start URL when launching the application from a device. `string`
    version: '1.0', // Your application's version string. `string`
    logging: false, // Print logs to console? `boolean`
    pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
    loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
    icons: {
      // Platform Options:
      // - offset - offset in percentage
      // - background:
      //   * false - use default
      //   * true - force use default, e.g. set background for Android icons
      //   * color - set background for the specified icons
      //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
      //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
      //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
      //
      android: ['android-chrome-144x144.png', 'android-chrome-192x192.png'], // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      appleIcon: [
        'apple-touch-icon-114x114.png',
        'apple-touch-icon-120x120.png',
        'apple-touch-icon-144x144.png',
        'apple-touch-icon-152x152.png',
        'apple-touch-icon-167x167.png',
        'apple-touch-icon-180x180.png',
        'apple-touch-icon-57x57.png',
        'apple-touch-icon-60x60.png',
        'apple-touch-icon-72x72.png',
        'apple-touch-icon-76x76.png',
      ], // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      favicons: [
        'favicon-16x16.png',
        'favicon-32x32.png',
        'favicon-48x48.png',
        'favicon-96x96.png',
        'favicon.ico',
      ], // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      firefox: false, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      yandex: false, // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    },
  },
  callback = async function (error, response) {
    if (error) {
      console.log(error.message) // Error description e.g. "An unknown error has occurred"
      return
    }
    /**
     * console.log(response.images) // Array of { name: string, contents: <buffer> }
     * console.log(response.files) // Array of { name: string, contents: <string> }
     * console.log(response.html) // Array of strings (html elements)
     */

    fs.ensureDirSync(FULL_OUTPUT)

    await Promise.all(
      response.images
        .concat(response.files)
        .map(({ name, contents }) => ({
          name: path.join(FULL_OUTPUT, name),
          contents,
        }))
        .map(({ name, contents }) => fs.writeFile(name, contents))
    )

    await fs.writeFile(HTML_TEMPLATE, response.html.join('\n'))
  }

favicons(source, configuration, callback)
