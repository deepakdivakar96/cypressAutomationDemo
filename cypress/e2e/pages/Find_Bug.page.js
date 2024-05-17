const { url } = require("inspector");

class FindBugs {

    elements = {
        addToCartBtnOnBugPage: () => cy.get('span #ec_add_to_cart_5'),
        checkoutButton: () => cy.get('span #ec_added_to_cart_5'),
        viewCart: () => cy.get('.ec_product_added_icon + a'),
        item: () => cy.get('h3.test_title.ec_product_title_type1'),
        minusQuantity: () => cy.get('.ec_details_quantity .ec_minus'),
        enterQuantityValue: () => cy.get('.ec_details_quantity > input[type="number"]'),
        submitPayment: () => cy.get('div.ec_cart_breadcrumb.ec_inactive + div+div'),
        termAndCondition :()=> cy.get('ul>li[style*="padding-right"]>a[style]'),
        privacyPolicy : ()=> cy.get('ul>li[style*="padding-right"]+li[style*="padding-top"]'),
        uTest :()=> cy.get('ul>li[style*="padding-right: 20"]>a[href]'),
        itemName : ()=> cy.get('.academy-product-description-wrapper>h3>a')
    }

    verifyOption(Option) {
        cy.wait(3000);
        this.elements.checkoutButton().should("include.text", Option);
    }

    ClickOnViewCartOnFindBugPage() {
        this.elements.viewCart().first().invoke('text').then((text) => {
            expect(text).to.include('View Cart');

        })
        cy.get('[title="View Cart"]').click();
    }

    verifyUrl(url) {
        cy.wait(3000);
        cy.url().should('include', url);

    }

    verifyBreadcrumbOnCartPage(breadcrumb) {
        this.elements.submitPayment().should('include.text', breadcrumb);
    }

    clickAddToCartOnFindBugsPage() {
        this.elements.addToCartBtnOnBugPage().click();
    }

    selectTheItem(item) {
        this.elements.item().contains('a.ec_image_link_cover', item).click();
    }

    VerifyUrlShouldNotContain(url) {
        cy.url().should('not.include', url)
    }
    verifyFooterContent(content) {
        if (content == 'utest') {
            this.elements.uTest()
            .invoke('attr', 'href')
                .should((attributeValue) => {
                    expect(attributeValue).to.include(content);
                });

        }
        else if (content == 'Terms & Conditions') {
            this.elements.termAndCondition().should('include.text', content);

        }
        else if (content == 'Privacy Policy') {
            this.elements.privacyPolicy().should('include.text', content);

        }
    }

}

module.exports = new FindBugs();