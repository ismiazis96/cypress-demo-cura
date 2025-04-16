describe('Visit Web', () => {
    it('Assertion Page Website', () => {
        cy.visit('/');
        cy.get('h1').should('have.text', 'CURA Healthcare Service');
    });
});