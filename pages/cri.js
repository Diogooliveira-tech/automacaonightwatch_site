const fs = require('fs');

const orderIssuer = {
    alphabeticalOrder: function () {
        return this
            .useXpath()
            .waitForElementVisible("//*[contains(text(),'Emissor')]", 60000)
            .click("//*[contains(text(),'Emissor')]")
    },
    selectOperation: function () {
        return this
            .useXpath()
            .waitForElementVisible("//*[contains(text(),'17K0150400')]", 60000)
            .click("//*[contains(text(),'17K0150400')]")
    },
    previsaoPU: function () {
        return this
            .useXpath()
            .waitForElementVisible("//span[contains(text(),'Previsão de PU')]", 60000)
            .click("//span[contains(text(),'Previsão de PU')]")
    },
    downloadPU: function () {
        return this
            .useXpath()
            .waitForElementVisible("//*[name()='path' and contains(@d,'M19 12v7H5')]", 60000)
            .click("//*[name()='path' and contains(@d,'M19 12v7H5')]")
    },
    exportAsCSV: function () {
        setInterval(function () {
            click("//*[contains(text(),'Export as CSV')]")
        }, 60000)
        return this
            .useXpath()
            .waitForElementVisible("//*[contains(text(),'Export as CSV')]", 60000)
            .click("//*[contains(text(),'Export as CSV')]")
    }
}

const dashboardCriInfo = {
    saveArchiveCri: function () {
        let remuneracao = ''
        return this
            .useCss()
            .waitForElementVisible('.operacao-detalhe')
            .useXpath()
            .getText("//div[@class='operacao-detalhe-dashboard']",
                function (result) {
                    fs.writeFile("./tests_output/criDashboard.txt", result.value, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });
                });
    }
}


module.exports = {
    commands: [orderIssuer, dashboardCriInfo],
    elements: {
        closeButton: '.close'
    }
}
