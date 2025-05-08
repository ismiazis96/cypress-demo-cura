const loginPage = require('../../support/page-object/loginPage');
const bookingPage = require('../../support/page-object/bookingPage');

describe('Login Tests on CURA', () => {
    // const baseUrl = '/';
  
    beforeEach(() => {
      // cy.visit(baseUrl);
      cy.visit('/');
      //cy.contains('Make Appointment').click();
      bookingPage.goToAppointment();
    });
  
    it('Login with valid credentials (positive)', () => {
      // panggil fungsi login positive
      loginPage.login({});
  
      cy.url().should('include', 'appointment');
      cy.contains('Make Appointment').should('exist');
    });
  
    it('Login with invalid password (negative)', () => {
      // panggil fungsi login negative invalid field
      loginPage.loginWrong();
    
      cy.wait(2000);
      cy.get('.text-danger').should('contain', 'Login failed');
    });
  
    it('Login with empty fields (negative)', () => {
        // panggil fungsi login negative field empty
        loginPage.loginEmpty();

        cy.wait(2000);
        cy.get('.text-danger').should('contain', 'Login failed');
    });
  });
  