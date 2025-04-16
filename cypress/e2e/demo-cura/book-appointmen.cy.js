describe('Appointment Tests on CURA', () => {
    beforeEach(() => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.contains('Make Appointment').click();
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
    });
  
    it('Book appointment successfully', () => {
      cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').check();
      cy.get('#radio_program_medicaid').check();
      cy.get('#txt_visit_date').type('20/04/2025');
      cy.get('#txt_comment').type('Ini test appointment');
      cy.get('#btn-book-appointment').click();
  
      cy.contains('Appointment Confirmation').should('exist');
      cy.contains('Tokyo CURA Healthcare Center').should('exist');
    });
  });
  