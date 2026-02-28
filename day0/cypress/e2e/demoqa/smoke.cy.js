describe('Demo QA - ViA - Maksims Ahmetovs', () => {
    context('Text box scenarios', () => {
        beforeEach(() => {
            cy.visit('/text-box');
        });

        it('Set text box values', () => {
            // set Full Name
            cy.get('#userName').type('Maksims Ahmetovs');
            // set Email
            cy.get('#userName').type('maksims.ahmetovs@va.lv');
            // set address
            cy.get('textarea#currentAddress').type('My current address');
            // set permament address
            cy.get('textarea#permamentAddress').type('My permanent address');
            // click submit pogu
            cy.get('#submit').click();
        });
    });
});