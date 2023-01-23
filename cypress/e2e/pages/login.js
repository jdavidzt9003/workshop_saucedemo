///<reference types = "cypress"/>
import envConfig from '../../config/env-config'

export const elementWebLogin = {
    inputUsername: '[data-test="username"]',
    inputPassword: '[data-test="password"]',
    buttonLogin: '[data-test="login-button"]'
}

export class Login{
    openPage(){
        cy.visit(envConfig.url.saucedemo)
    }

    inputDataLogin(){
        describe('input data user login', () => {
            cy.fixture('login.json').then((data) => {
                cy.get(elementWebLogin.inputUsername).type(data.username);
                cy.get(elementWebLogin.inputPassword).type(data.password);
                cy.get(elementWebLogin.buttonLogin).click()
            })
        })
    }
} 