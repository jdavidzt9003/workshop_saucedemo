export default {
    url: {
        saucedemo:
            Cypress.env("URL_BASE") ||
            "https://www.saucedemo.com/",
    }
};