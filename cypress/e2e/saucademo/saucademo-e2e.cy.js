

describe('E2e test saucademo', () => {
    // baseUrl = 'https://www.saucedemo.com/';

    it('Test Positive E2E', () => {
        // cy.visit(baseUrl);
        // login
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // add items to buy
        cy.xpath(`//button[@data-test="add-to-cart-sauce-labs-bike-light"]`).click();
        cy.xpath(`//button[@data-test="add-to-cart-sauce-labs-fleece-jacket"]`).click();

        // shopping cart
        cy.xpath(`//a[@data-test="shopping-cart-link"]`).click();

        // checkout items
        cy.xpath(`//button[@data-test="checkout"]`).click();

        // add information buyyer
        cy.xpath(`//input[@data-test="firstName"]`).type('ismi');
        cy.xpath(`//input[@data-test="lastName"]`).type('azis');
        cy.xpath(`//input[@data-test="postalCode"]`).type('123');

        // checkout step one
        cy.xpath(`//input[@data-test="continue"]`).click();
        
        // checkout step two
        cy.xpath(`//button[@data-test="finish"]`).click();
    });
});