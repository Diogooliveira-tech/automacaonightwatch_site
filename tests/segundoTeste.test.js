
module.exports = {
    'Dado que acesso o site da Vortx': (browser) => {
        let homePage = browser.page.homePage()
        homePage
            .navigate()
    },
    'E clico na seção de investidor': (browser) => {
        let homePage = browser.page.homePage()
        homePage
            .waitForElementVisible('@investidorLink', 60000)
            .click('@investidorLink')
    },
    'Quando acesso o primeiro fundo em Fundos de Investimento': (browser) => {
        let investidor = browser.page.investidor()
        investidor
            .selectFundos()
    },
    'então salvo as informações do fundo em um arquivo': (browser) => {
        let fundos = browser.page.fundos()
        fundos
            .firstOption()
            .saveArchiveFund()

    },
    'e  acesso a aba Documentos faço download do primeiro arquivo de Assembleias': function (browser) {
        let fundos = browser.page.fundos()
        fundos
            .documentsLink()
            .assembly()
            .firstAssembly()
    }
}