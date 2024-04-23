import { faker } from '@faker-js/faker'

export default class thisPage {
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

    succesffullRegistration() {
        const randomEmail = faker.internet.email()
        const randomPassword = faker.internet.password()

        // Entering the generated email and password into the form
        this.elements.emailInput().type(randomEmail)
        this.elements.passwordInput().type(randomPassword)
        this.elements.submitButton().click()

        this.elements.submitButton().click()

        // First make the file input visible
        this.elements
            .fileInput()
            .invoke('removeAttr', 'hidden') // Remove the hidden attribute
            .should('be.visible') // Ensure it is now visible

        // Now you can use `selectFile` to upload a file
        this.elements
            .fileInput()
            .selectFile('cypress/fixtures/images/profile-photo.png')

        // Optionally hide the input again if needed
        this.elements.fileInput().invoke('attr', 'hidden', 'hidden')

        // Confirm information screen
        this.elements.typeName().type('Nicolas', { log: false })
        this.elements.swipeButton().click()
        this.elements.confirmButton().click()
        this.elements.yourPosition().select(2)
        this.elements.confirmButton().click()

        //Name of the team Screen
        this.elements.nameTeam().type('beloved-team', { log: false })
        this.elements.confirmButton().click()

        //Screen information about your profile, company, team, etc
        this.elements
            .dropdownIndustrySector()
            .select('Tecnología de la información')
        this.elements
            .dropdownProfession()
            .select('Tecnología de la información')
        this.elements.dropdownAmountOrganization().select(3)
        this.elements.confirmButton().click()
        this.elements.confirmButton().click()
        this.elements.skipButton().click()
    }

    invalidRegistrationWithoutPassword() {
        this.elements
            .emailInput()
            .type(Cypress.env('TODOIST_INVALID_EMAIL'), { log: false })
        this.elements.passwordInput()
        this.elements.submitButton().click()
    }

    invalidRegistrationWithoutPasswordAndEmail() {
        this.elements.submitButton().click()
    }

    invalidRegistrationWithoutEmail() {
        this.elements.passwordInput().type(randomPassword)
        this.elements.submitButton().click()
    }
}

module.exports = new thisPage()
