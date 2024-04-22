import { faker } from '@faker-js/faker'

export default class TodoistRegistrationPage {
    elements = {
        emailInput: () => cy.get('#element-0'),
        passwordInput: () => cy.get('#element-3'),
        submitButton: () => cy.get('[data-gtm-id="start-email-signup"]'),
        typeName: () => cy.get('#element-0'),
        fileInput: () => cy.get('input[type="file"][name="photo"]'),
        swipeButton: () => cy.get('._5af09fb5'),
        confirmButton: () => cy.contains('Continuar'),
        skipButton: () => cy.get('[label="Omitir por ahora"]'),
        dropdownIndustrySector: () => cy.get('#element-11'),
        dropdownProfession: () => cy.get('#element-14'),
        dropdownAmountOrganization: () => cy.get('#element-17'),
        nameTeam: () => cy.get('#element-8'),
        yourPosition: () => cy.get('#element-5'),
    }

    visit() {
        cy.visit('/')
    }

    registration() {
        this.elements.emailInput().type(faker.internet.email())
        this.elements.passwordInput().type(faker.internet.password())
        this.elements.submitButton().click()
        this.elements.typeName().type('Nicolas')
        this.elements
            .fileInput()
            .attachFile('cypress/fixtures/images/profile-photo.png')
        this.elements.swipeButton().click()
        this.elements.confirmButton().click()
    }
}

module.exports = new TodoistRegistrationPage()
