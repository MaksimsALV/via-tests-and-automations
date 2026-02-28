import {BasePage} from "./basePage";
export class RadioButtonsPage extends BasePage {
    static get url() {
        return '/radio-button';
    }

    static get yesButton() {
        return cy.get("[id='yesRadio']");
    }

    static get impressiveButton() {
        return cy.get("[id='impressiveRadio']");
    }

    static get noButton() {
        return cy.get("[id='noRadio']");
    }

    static get message() {
        return cy.get(".text-success");
    }
}