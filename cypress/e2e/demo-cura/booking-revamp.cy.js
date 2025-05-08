
const loginPage = require('../../support/page-object/loginPage');
const bookingpage = require('../../support/page-object/bookingPage');


describe('Appointment Tests on CURA', () => {
    beforeEach(() => {
      cy.visit('/');
      // page Appointment
      bookingpage.goToAppointment();
    
      // login
      loginPage.login({});
      
    });
  
    it('Book appointment successfully with ENV credential', () => {

        // add input booking
        bookingpage.formBooking({});
  
        cy.contains('Appointment Confirmation').should('exist');
        // cy.contains('Tokyo CURA Healthcare Center').should('exist');
    });

    it('Book appointment successfully with data Json', () => {

        // add input booking
        bookingpage.formBookingUser();
  
        cy.contains('Appointment Confirmation').should('exist');
        // cy.contains('Tokyo CURA Healthcare Center').should('exist');
    });

    it('Book appoinment Failed', () => {
        cy.get('#btn-book-appointment').click();
        cy.wait(2000);
        cy.url().should('include', '/');
    });
  });
  