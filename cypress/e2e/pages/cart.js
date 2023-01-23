///<reference types = 'cypress'/>

export const elementWebCart = {
    titleArticle: '.inventory_item_name',
    titlePage: '.title',
    buttonCheckout: '[data-test="checkout"]'
}

export class Cart {
    countItem() {
        describe('count articles added to Cart', () => {
            cy.fixture('message').then((data) => {
                cy.get(elementWebCart.titlePage).should('have.text', data.titleYourCart)
                cy.get(elementWebCart.titleArticle).should('have.length',2)
            })  
        })
    }

    verifyArticlesAdded(articleName){
        cy.get(elementWebCart.titleArticle).each(($el, index, $list) => {
            cy.log($el.text())
            cy.get(elementWebCart.titleArticle).eq(index).then(function ($ele) {
                let document = $ele.text()
                cy.log(document)
                cy.get(elementWebCart.titleArticle).should('contain.text', articleName)
            })
        })
    }

    doClickCheckout(){
        cy.get(elementWebCart.buttonCheckout).click()
    }
}