module.exports = {

    beforeEach: function (browser, done) {
        browser.windowMaximize()
        done()
    },

    afterEach: function (browser, done) {
        browser.end()
        done()
    },
}