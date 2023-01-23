///<reference types = 'cypress'/>

const elementWebInventory = {
    labelNameArticle: '.inventory_item_name',
    buttonAddToCartArticle3: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    buttonAddToCartArticle2: '[data-test="add-to-cart-sauce-labs-bike-light"]',
    buttonBack: '[data-test="back-to-products"]',
    buttonCart: '.shopping_cart_link',
    labelCountArticles: '.shopping_cart_badge'
}

export class Inventory {
    addArticleToCart() {
        describe('Add articles to cart from inventry pages', () => {
            cy.fixture('products').then((data) => {
                cy.get(elementWebInventory.labelNameArticle).should('have.length', 6);
                cy.get(elementWebInventory.labelNameArticle).contains(data.article3).click();
                cy.get(elementWebInventory.buttonAddToCartArticle3).click();
                cy.get(elementWebInventory.buttonBack).click();
                cy.get(elementWebInventory.labelNameArticle).contains(data.article2).click();
                cy.get(elementWebInventory.buttonAddToCartArticle2).click();
                cy.get(elementWebInventory.buttonBack).click();
            })
        })
    }

    goToCart() {
        cy.get(elementWebInventory.buttonCart).click()
        cy.get(elementWebInventory.labelCountArticles).should('have.text',2)
    }
}