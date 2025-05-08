
const element = require('../element/loginPage.json');
const wrongLogin = require('../../fixtures/credentialData.json')

class LoginPage{
    login({
        username=Cypress.env('STANDARD_USERNAME'),
        password=Cypress.env('STANDARD_PASSWORD')
    }){

        cy.get(element.username).type(username);
        cy.get(element.password).type(password);
        cy.get(element.submit).click();
    }

    loginWrong() {
        cy.get(element.username).type(wrongLogin.wrongCredential.username);
        cy.get(element.password).type(wrongLogin.wrongCredential.password);
        cy.get(element.submit).click();
    }

    loginEmpty() {
        cy.get(element.submit).click();
    }
}

export default new LoginPage();