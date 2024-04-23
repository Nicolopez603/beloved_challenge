/// <reference types="cypress" />
import TodoistLoginPage from '../../support/pages/todoist-login'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('auth/login')
        cy.url().should('include', 'auth/login')
    })
    it('Succesfull Login', () => {
        TodoistLoginPage.succesfullLogin()

        cy.url().should('include', '/app/today')
        cy.title().should('include', 'Hoy')
    })

    it('Invalid Login', () => {
        TodoistLoginPage.invalidLogin()

        //Alert-Error
        cy.get('._8f5b5f2b')
            .should('be.visible')
            .and('contain', 'Email o contraseña incorrectos.')
    })

    it('Invalid Login - No email', () => {
        TodoistLoginPage.invalidLoginWithoutEmail()

        //Alert-Error
        cy.get('._8f5b5f2b')
            .should('be.visible')
            .and('contain', 'Introduce una dirección de email válida.')
    })

    it('Invalid Login - No password', () => {
        TodoistLoginPage.invalidLoginWithoutPassword()

        //Alert-Error
        cy.get('._8f5b5f2b')
            .should('be.visible')
            .and(
                'contain',
                'Las contraseñas deben tener al menos 8 caracteres.'
            )
    })
})
