module.exports = {
  async onPreBuild({ utils }) {
    await utils.cache.restore('./kamfly')
  },
  async onPostBuild({ utils }) {
    await utils.cache.save('./kamfly')
  },
}
