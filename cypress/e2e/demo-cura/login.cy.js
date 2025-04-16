describe('Login Tests on CURA', () => {
    const baseUrl = '/';
  
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.contains('Make Appointment').click();
    });
  
    it('Login with valid credentials (positive)', () => {
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
  
      cy.url().should('include', 'appointment');
      cy.contains('Make Appointment').should('exist');
    });
  
    it('Login with invalid password (negative)', () => {
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('WrongPassword');
      cy.get('#btn-login').click();
    
      cy.wait(2000);
      cy.get('.text-danger').should('contain', 'Login failed');
    });
  
    it('Login with empty fields (negative)', () => {
      cy.get('#btn-login').click();
      cy.wait(2000);
      cy.get('.text-danger').should('contain', 'Login failed');
    });
  });
  