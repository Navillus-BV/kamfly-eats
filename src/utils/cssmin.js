const csso = require('csso')

module.exports = function(code) {
    return csso.minify(code).css
}