describe('Demo QA - ViA - Maksims Ahmetovs', () => {
    context('Text box scenarios', () => {
        beforeEach(() => {
            cy.visit('/text-box');
        });

        it('Set text box values', () => {
            // set Full Name
            cy.get('#userName').type('Maksims Ahmetovs');
            // set Email
            cy.get('#userEmail').type('maksims.ahmetovs@va.lv');
            // set address
            cy.get('textarea#currentAddress').type('My current address');
            // set permament address
            cy.get('textarea#permanentAddress').type('My permanent address');
            // click submit pogu
            cy.get('#submit').click();
            // assert tests
            cy.get('p#name').should('have.text', 'Name:Maksims Ahmetovs');
            cy.get('p#email').should('have.text', 'Email:maksims.ahmetovs@va.lv');
            cy.get('p#currentAddress').should('contain.text', 'Current Address :My current address');
            cy.get('p#permanentAddress').should('contain.text', 'Permanent Address :My permanent address');
        });
    });
});