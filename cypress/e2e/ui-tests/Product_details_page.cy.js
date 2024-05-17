import FindBugs from '../pages/Find_Bug.page';
import ProductDetails from '../pages/Product_Details.page'
describe('Product Details', () => {
let testDataFileName = "ui_data.json";
let testData;
beforeEach(() => {
  cy.fixture(testDataFileName).then((data) => {
    testData = data;
    cy.visit(testData.uiBaseUrl);
  });
});
    it('verify the product should not be less than one', () => {
        FindBugs.verifyUrl(testData.findBugs.findbugsEndpoint);
        FindBugs.selectTheItem(testData.findBugs.shoes);
        ProductDetails.enterProductQuantity(testData.productDetailsPage.productQty);
        ProductDetails.clickOnAddToCart();
        FindBugs.VerifyUrlShouldNotContain(testData.cartPage.cartEndpoint);
    })
    
    it('verify user should not be able to post reply without name and email on product detail page',()=>{
        FindBugs.verifyUrl(testData.findBugs.findbugsEndpoint);
        FindBugs.selectTheItem(testData.findBugs.shoes);
        FindBugs.verifyUrl(testData.productDetailsPage.productEndpoint);
        ProductDetails.verifyReplyTitle(testData.productDetailsPage.leaveReply);
        ProductDetails.selectPostComment();
        ProductDetails.verifyTheErrorMsg(testData.productDetailsPage.errorMsg);
    
     })
})