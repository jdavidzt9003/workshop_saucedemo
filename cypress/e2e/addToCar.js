///<reference types = "cypress"/>

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import { CheckoutCompleted } from "./pages/checkoutCompleted";
import { CheckoutOverview } from "./pages/checkoutOverview";
import { Inventory } from "./pages/inventory";
import { Login } from "./pages/login";

const login = new Login();
const inventory = new Inventory();
const cart = new Cart();
const checkout = new Checkout();
const checkoutOverview = new CheckoutOverview();
const checkoutCompleted = new CheckoutCompleted();

Given('An user is at the saucelabs login page', () => {
    login.openPage();
    login.inputDataLogin();
})

When('add two producto to the buy car', () => {
    cy.fixture('products').then((data) => {
        inventory.addArticleToCart();
        inventory.goToCart();
        cart.countItem();
        cart.verifyArticlesAdded(data.articles.article1)
        cart.verifyArticlesAdded(data.articles.article2)
        cart.doClickCheckout();
        checkout.fillForm();
        checkout.doClickContinue();
    })
})

Then('will complete the purchase successfully', () => {
    cy.fixture('products').then((data) => {
        checkoutOverview.countItem();
        checkoutOverview.verifyArticlesAdded(data.articles.article1);
        checkoutOverview.verifyArticlesAdded(data.articles.article2);
        checkoutOverview.doClickCheckout();
        checkoutCompleted.verifySuccesful();
    })
})
