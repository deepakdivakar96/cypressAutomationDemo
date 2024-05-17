import FindBugs from '../pages/Find_Bug.page';
describe('Find Bugs', () => {
    let testDataFileName = "ui_data.json";
    let testData;
    beforeEach(() => {
      cy.fixture(testDataFileName).then((data) => {
        testData = data;
        cy.visit(testData.uiBaseUrl);
      });
    });

    it('Add item to cart and verify on the my-cart page ', () => {
        FindBugs.verifyUrl(testData.findBugs.findbugsEndpoint);
        FindBugs.clickAddToCartOnFindBugsPage();
        FindBugs.verifyOption(testData.findBugs.checkout);
        FindBugs.ClickOnViewCartOnFindBugPage();
        FindBugs.verifyUrl(testData.cartPage.cartEndpoint);
        FindBugs.verifyBreadcrumbOnCartPage(testData.findBugs.submitPayment);
    })

    it('verify footer content on the find Bugs page', () => {
        let footerContent = ["utest", "Terms & Conditions", "Privacy Policy"]
        FindBugs.verifyUrl(testData.findBugs.findbugsEndpoint);
        for (let i = 0; i < footerContent.length; i++) {
            FindBugs.verifyFooterContent(footerContent[i])
        }
    })
})
