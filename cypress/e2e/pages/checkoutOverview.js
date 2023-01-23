///<reference types = 'cypress'/>

export const elementeWebCheckoutOverview = {
    title: '.title',
    titleArticle: '.inventory_item_name',
    buttonFinish: '[data-test="finish"]'
}

export class CheckoutOverview {
    countItem() {
        describe('count articles added to Cart', () => {
            cy.fixture('message').then((data) => {
                cy.get(elementeWebCheckoutOverview.title).should('have.text', data.titleCheckoutOverview)
                cy.get(elementeWebCheckoutOverview.titleArticle).should('have.length',2)
            })  
        })
    }

    verifyArticlesAdded(articleName){
        cy.get(elementeWebCheckoutOverview.titleArticle).each(($el, index, $list) => {
            cy.log($el.text())
            cy.get(elementeWebCheckoutOverview.titleArticle).eq(index).then(function ($ele) {
                cy.get(elementeWebCheckoutOverview.titleArticle).should('contain.text', articleName)
            })
        })
    }

    doClickCheckout(){
        cy.get(elementeWebCheckoutOverview.buttonFinish).click()
    }
}