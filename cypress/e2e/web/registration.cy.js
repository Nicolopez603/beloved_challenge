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

        todoistRegistration.elements.typeName().type('Nicolas')
        todoistRegistration.elements.swipeButton().click()
        todoistRegistration.elements.confirmButton().click()
        cy.get('#element-5').select(2)
        //Boton Continuar
        todoistRegistration.elements.confirmButton().click()
        cy.get('#element-8').type('jjijasda')
        cy.get('._7a4dbd5f').click() //Tecnología de la información
        cy.get('#element-11').select('Tecnología de la información')
        cy.get('#element-14').select('Tecnología de la información')
        cy.get('#element-17').select(3)
        //Boton continuar
        todoistRegistration.elements.confirmButton().click()
        cy.get('._7a4dbd5f').click()
        cy.get('[label="Omitir por ahora"]').click()
        cy.url('include', '/app/today')
        cy.get('.EnOQGHT').should('be.visible')
    })
})
