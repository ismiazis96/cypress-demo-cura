
const bookingUser = require('../../fixtures/bookingData.json');

class bookingpage {

    goToAppointment() {
        cy.contains('Make Appointment').click();
    }
    formBooking({
        // fasilitas=Cypress.env('FASILITAS'),
        deskripsi=Cypress.env('DESKRIPSI'),
        date=Cypress.env('DATE')
    }){
        // cy.log('Selected facility:', fasilitas);
        cy.get('#combo_facility').select(bookingUser.fasilitas);
        // cy.get('#combo_facility').select(fasilitas);
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        // cy.get('#txt_comment').type('Ini test appointment');
        cy.get('textarea').clear().type(deskripsi);
        cy.log('Area:', deskripsi);
        cy.get('#txt_visit_date').type(date);
        cy.get('#btn-book-appointment').click();
    }

    formBookingUser(){
        cy.get('#combo_facility').select(bookingUser.fasilitas);
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        // cy.get('#txt_comment').type('Ini test appointment');
        cy.get('textarea').clear().type(bookingUser.deskripsi);
        cy.get('#txt_visit_date').type(bookingUser.date);
        cy.get('#btn-book-appointment').click();
    }
}

export default new bookingpage();