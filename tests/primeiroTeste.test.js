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
    'Quando acesso CRI': (browser) => {
        let investidor = browser.page.investidor()
        investidor
            .selectCRI()

    },
    'E seleciono a primeira operação da ordem alfabética': (browser) => {
        let cri = browser.page.cri()
        cri
            .alphabeticalOrder()
            .selectOperation()

    },
    'então faço download da previsão de PU': (browser) => {
        let cri = browser.page.cri()
        cri
            .previsaoPU()
            .downloadPU()
            .exportAsCSV()
            .click('@closeButton')

    },
    'e salvo as informações da operação em um arquivo': (browser) => {
        let cri = browser.page.cri()
        cri
            .saveArchiveCri()
    }
}