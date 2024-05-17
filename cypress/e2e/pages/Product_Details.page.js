class ProductDetails{


    elements = {
        replyTitle: () => cy.get('.comment-reply-title'),
        postComment: () => cy.get('.form-submit >[value="Post Comment"]'),
        errorMsg: () => cy.get('.wp-die-message >p'),
        addToCartbtn: () => cy.get('div.ec_details_add_to_cart >[type="submit"]'),
        quantityTextBox : ()=>  cy.get('.ec_details_quantity > input[type="number"]'),
    }

verifyReplyTitle(title) {
        this.elements.replyTitle().invoke('text').then((text) => {
            expect(text).to.include(title);

        });
    }
     
    selectPostComment() {
        this.elements.postComment().click();
    }
    verifyTheErrorMsg(message) {
        this.elements.errorMsg().invoke('text').then((text) => {
            expect(text).to.include(message);
        })
    }

    enterProductQuantity(value) {
        this.elements.quantityTextBox().clear().type(value);
    }
    clickOnAddToCart() {
        this.elements.addToCartbtn().click();
    }

}

module.exports = new ProductDetails;