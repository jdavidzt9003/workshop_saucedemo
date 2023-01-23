///<reference types = 'cypress'/>

const elementeWebCheckout = {
    inputFirstName: '[data-test="firstName"]',
    inputLastName: '[data-test="lastName"]',
    inputCodePostal: '[data-test="postalCode"]',
    buttonContinue: '[data-test="continue"]'
}

export class Checkout {
    fillForm() {
        cy.fixture('checkout.json').then((data) =>{
            cy.get(elementeWebCheckout.inputFirstName).type(data.firstName)
            cy.get(elementeWebCheckout.inputLastName).type(data.lastName)
            cy.get(elementeWebCheckout.inputCodePostal).type(data.postalCode)
        })
    }

    doClickContinue(){
        cy.get(elementeWebCheckout.buttonContinue).click()
    }
}