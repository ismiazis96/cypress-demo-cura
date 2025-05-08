// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// commands.js
export const visitSaucedemo = () => cy.visit('https://www.saucedemo.com/');

export const login = (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
};

export const addToCart = (item) => cy.xpath(`//button[@data-test="add-to-cart-${item}"]`).click();

export const openShoppingCart = () => cy.xpath(`//a[@data-test="shopping-cart-link"]`).click();

export const checkout = () => cy.xpath(`//button[@data-test="checkout"]`).click();

export const addBuyerInfo = (firstName, lastName, postalCode) => {
  cy.xpath(`//input[@data-test="firstName"]`).type(firstName);
  cy.xpath(`//input[@data-test="lastName"]`).type(lastName);
  cy.xpath(`//input[@data-test="postalCode"]`).type(postalCode);
};
export const continueCheckout = () => cy.xpath(`//input[@data-test="continue"]`).click();
export const finishCheckout = () => cy.xpath(`//button[@data-test="finish"]`).click();



// // commands.js
// import elements from './elements.json';
// export const visitSaucedemo = () => cy.visit('https://www.saucedemo.com/');
// export const login = (username, password) => {
//   cy.get(elements.username.selector).type(username);
//   cy.get(elements.password.selector).type(password);
//   cy.get(elements.loginButton.selector).click();
// };
// export const addToCart = (item) => {
//   const selector = elements.addToCart.selector.replace('{}', item);
//   cy.xpath(selector).click();
// };
// export const openShoppingCart = () => cy.xpath(elements.shoppingCartLink.selector).click();
// export const checkout = () => cy.xpath(elements.checkoutButton.selector).click();
// export const addBuyerInfo = (firstName, lastName, postalCode) => {
//   cy.xpath(elements.firstName.selector).type(firstName);
//   cy.xpath(elements.lastName.selector).type(lastName);
//   cy.xpath(elements.postalCode.selector).type(postalCode);
// };
// export const continueCheckout = () => cy.xpath(elements.continueButton.selector).click();
// export const finishCheckout = () => cy.xpath(elements.finishButton.selector).click();
