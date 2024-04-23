/// <reference types="cypress" />
import todoistRegistration from '../../support/pages/todoist-registration'

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('auth/signup')
        cy.url().should('include', 'auth/signup')
        cy.location('protocol').should('contains', 'https')
    })
    it('Complete Successful registration', () => {
        todoistRegistration.succesffullRegistration()

        //HomePage User
        cy.url('include', '/app/today')

        //Verify that you are on today's screen
        cy.title().should('include', 'Hoy')
    })

    it('Invalid registration', () => {
        todoistRegistration.invalidRegistration()

        cy.title().should('include', 'Registrarme')
    })

    it('Invalid registration - No Password', () => {
        todoistRegistration.invalidRegistrationWithoutPassword()

        cy.get('#element-5').should(
            'contain.text',
            'Las contraseñas deben tener al menos 8 caracteres.'
        )
    })

    it('Invalid registration - No email', () => {
        todoistRegistration.invalidRegistrationWithoutEmail()

        cy.get('._8f5b5f2b').should(
            'contain.text',
            'Introduce una dirección de email válida.'
        )
    })

    it('Invalid Login - Without password and Email', () => {
        todoistRegistration.invalidRegistrationWithoutPasswordAndEmail()

        cy.get('._8f5b5f2b').should(
            'contain.text',
            'Introduce una dirección de email válida.'
        )
    })
})
