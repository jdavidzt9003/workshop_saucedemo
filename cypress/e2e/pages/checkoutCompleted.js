///<reference types = 'cypress'/>

const elementeWebCheckoutCompleted = {
    headerCompleted: ".complete-header"
}

export class CheckoutCompleted {
    verifySuccesful(){
        cy.fixture('message').then((data) => {
            cy.get(elementeWebCheckoutCompleted.headerCompleted).should('have.text', data.orderCompleted)
        })
    }
}