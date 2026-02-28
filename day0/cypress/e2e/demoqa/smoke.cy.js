import {TextBoxPage} from "../pageObjects/textboxPage";
import {RadioButtonsPage} from "../pageObjects/radioButtonsPage";

describe('Demo QA - ViA - Maksims Ahmetovs', () => {
    context('Text box scenarios', () => {
        beforeEach(() => {
            TextBoxPage.visit();
        });

        it('Set text box values', () => {
            // set Full Name
            TextBoxPage.userNameField.type('Maksims Ahmetovs')
            // set Email
            TextBoxPage.emailField.type('maksims.ahmetovs@va.lv')
            // set address
            TextBoxPage.currentAddressField.type('My current address');
            // set permament address
            TextBoxPage.permanentAddressField.type('My permanent address');
            // click submit pogu
            TextBoxPage.submitButton.click();
            // assert tests
            TextBoxPage.outputName.should('have.text', 'Name:Maksims Ahmetovs');
            TextBoxPage.outputEmail.should('have.text', 'Email:maksims.ahmetovs@va.lv');
            TextBoxPage.outputCurrentAddress.should('contain.text', 'Current Address :My current address');
            TextBoxPage.outputPermanentAddress.should('contain.text', 'Permananet Address :My permanent address');
        });

        it.only('Incorrect email field value', () => {
            // setting eml to xxx@yyy@zzz.com
            TextBoxPage.emailField.type('xxx@yyy@zzz.com');
            // click submit button
            TextBoxPage.submitButton.click();
            // validate red border
            TextBoxPage.emailField.should('have.class', 'field-error');
        });
    });

    context('Radio Button scenarios', () => {
        beforeEach(() => {
            RadioButtonsPage.visit();
        });

        it('Click Radio Buttons', () => {
            RadioButtonsPage.yesButton.click();
            RadioButtonsPage.message.should('have.text', 'Yes');
            RadioButtonsPage.impressiveButton.click();
            RadioButtonsPage.message.should('have.text', 'Impressive');
            RadioButtonsPage.noButton.should('have.attr', 'disabled');
            RadioButtonsPage.noButton.should('have.class', 'disabled');
            RadioButtonsPage.noButton.should('be.disabled');
        });
    });
});