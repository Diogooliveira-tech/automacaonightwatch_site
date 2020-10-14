const fs = require('fs');

const selectFund = {
    firstOption: function () {
        return this
            .useXpath()
            .waitForElementVisible("//a[contains(text(),'26.502.794/0001-85')]", 60000)
            .click("//a[contains(text(),'26.502.794/0001-85')]")
    },
    dashboardLink: function () {
        return this
            .useXpath()
            .waitForElementVisible("//li[@id='1']", 60000)
            .click("//li[@id='1']")
    },
    documentsLink: function () {
        return this
            .useXpath()
            .waitForElementVisible("//li[@id='2']", 60000)
            .click("//li[@id='2']")
    },
    assembly: function () {
        return this
            .useXpath()
            .waitForElementVisible("//p[contains(text(),'Assembleias')]", 60000)
            .click("//p[contains(text(),'Assembleias')]")
    },
    firstAssembly: function () {
        setInterval(function () {
            click("//div[@id='doc-Assembleias']//a[1]//p[1]")
        }, 60000)
        return this
            .useXpath()
            .waitForElementVisible("//div[@id='doc-Assembleias']//a[1]//p[1]", 60000)
            .click("//div[@id='doc-Assembleias']//a[1]//p[1]")

    }

}

const dashboardfundsInfo = {
    saveArchiveFund: function () {
        let dadosdashboard = ''
        return this
            .useXpath()
            .waitForElementVisible("//div[@class='fundo-detalhe-dashboard']", 30000)
            .getText("//div[@class='fundo-detalhe-dashboard']",
                function (result) {
                    fs.writeFile("./tests_output/fundosDashboard.txt", result.value, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });
                });
    }
}

module.exports = {
    commands: [selectFund, dashboardfundsInfo]
}
