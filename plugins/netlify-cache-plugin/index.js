const path = require('path');

function getCacheDir(constants) {
	return path.normalize(`${constants.PUBLISH_DIR}/../node_modules/.cache/vite-imagetools`);
}

module.exports = {
	async onPreBuild({ constants, utils }) {
		if (await utils.cache.restore(getCacheDir(constants))) {
			console.log('Found a Kamfly cache. We’re about to go FAST. ⚡️');
		} else {
			console.log('No Kamfly cache found. Building fresh.');
		}
	},
	async onPostBuild({ constants, utils }) {
		if (await utils.cache.save(getCacheDir(constants))) {
			console.log('Stored the Kamfly cache to speed up future builds.');
		} else {
			console.log('No Kamfly build found.');
		}
	}
};
