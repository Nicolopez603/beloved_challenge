/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import todoistRegistration from '../../support/pages/todoist-registration'

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/auth/signup')
        cy.url().should('include', 'auth/signup')
    })
    it('Register a new user with a profile photo', () => {
        // Generating random data using faker
        const randomEmail = faker.internet.email()
        const randomPassword = faker.internet.password()

        // Entering the generated email and password into the form
        todoistRegistration.elements.emailInput().type(randomEmail)
        todoistRegistration.elements.passwordInput().type(randomPassword)
        todoistRegistration.elements.submitButton().click()

        todoistRegistration.elements.submitButton().click()

        // First make the file input visible
        todoistRegistration.elements
            .fileInput()
            .invoke('removeAttr', 'hidden') // Remove the hidden attribute
            .should('be.visible') // Ensure it is now visible

        // Now you can use `selectFile` to upload a file
        todoistRegistration.elements
            .fileInput()
            .selectFile('cypress/fixtures/images/profile-photo.png')

        // Optionally hide the input again if needed
        todoistRegistration.elements
            .fileInput()
            .invoke('attr', 'hidden', 'hidden')

        todoistRegistration.elements.typeName().type('Nicolas', { log: false })
        todoistRegistration.elements.swipeButton().click()
        todoistRegistration.elements.confirmButton().click()
        todoistRegistration.elements.yourPosition().select(2)

        //Boton Continuar
        todoistRegistration.elements.confirmButton().click()

        todoistRegistration.elements
            .nameTeam()
            .type('beloved-team', { log: false })

        todoistRegistration.elements.confirmButton().click()

        todoistRegistration.elements
            .dropdownIndustrySector()
            .select('Tecnología de la información')
        todoistRegistration.elements
            .dropdownProfession()
            .select('Tecnología de la información')
        todoistRegistration.elements.dropdownAmountOrganization().select(3)
        todoistRegistration.elements.confirmButton().click()
        todoistRegistration.elements.confirmButton().click()
        todoistRegistration.elements.skipButton().click()

        cy.url('include', '/app/today')
        //Verificar que se encuentre en la pantalla de hoy
        cy.title().should('include', 'Hoy')
    })
})
