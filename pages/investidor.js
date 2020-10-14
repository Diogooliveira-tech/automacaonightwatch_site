const selectInvestiment = {
    selectCRI: function () {
        return this
            .useXpath()
            .waitForElementVisible("//h2[contains(text(),'CRI')]", 2000)
            .click("//h2[contains(text(),'CRI')]")
    },
    selectFundos: function () {
        return this
            .useXpath()
            .waitForElementVisible("//h2[contains(text(),'Fundos de Investimento')]", 2000)
            .click("//h2[contains(text(),'Fundos de Investimento')]")
    }
}

module.exports = {
    commands: [selectInvestiment]

}
