/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import todoistRegistration from '../../support/pages/todoist-registration'

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('auth/signup')
        cy.url().should('include', 'auth/signup')
    })
    it('Successful registration', () => {
        // Generating random data using faker
        todoistRegistration.succesffullRegistration()

        //HomePage User
        cy.url('include', '/app/today')

        //Verify that you are on today's screen
        cy.title().should('include', 'Hoy')
    })

    it('Invalid registration', () => {
        // Generating random data using faker
        todoistRegistration.succesffullRegistration()

        //HomePage User
        cy.url('include', '/app/today')

        //Verify that you are on today's screen
        cy.title().should('include', 'Hoy')
    })

    it.only('Invalid registration', () => {
        // Generating random data using faker
        todoistRegistration.invalidRegistrationWithoutPassword()
        cy.get('#element-5').should(
            'contain.text',
            'Las contraseñas deben tener al menos 8 caracteres.'
        )
    })
})
