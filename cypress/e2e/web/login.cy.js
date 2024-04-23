/// <reference types="cypress" />

describe('Login', () => {
    it('Succesfull Login', () => {
        cy.visit('/auth/login')

        cy.get('#element-0').type('elpepecoin@gmail.com')
        cy.get('#element-3').type('elpepecoin998')
        cy.get('._966b120f > .F9gvIPl').click()

        cy.url().should('include', '/app/today')
        cy.title().should('include', 'Hoy')
    })

    it('Invalid Login', () => {
        cy.visit('/auth/login')

        cy.get('#element-0').type('elpepecoin3@gmail.com')
        cy.get('#element-3').type('elpepecoin998._."')
        cy.get('._966b120f > .F9gvIPl').click()
        cy.get('._8f5b5f2b')
            .should('be.visible')
            .and('contain', 'Email o contraseña incorrectos.')
    })

    it('Invalid Login - No email', () => {
        cy.visit('/auth/login')

        cy.get('#element-0')
        cy.get('#element-3').type('elpepecoin998._."')
        cy.get('._966b120f > .F9gvIPl').click()
        cy.get('._8f5b5f2b')
            .should('be.visible')
            .and('contain', 'Introduce una dirección de email válida.')
    })

    it.only('Invalid Login - No password', () => {
        cy.visit('/auth/login')

        cy.get('#element-0').type('elpepecoin3@gmail.com')
        cy.get('#element-3')
        cy.get('._966b120f > .F9gvIPl').click()
        cy.get('._8f5b5f2b')
            .should('be.visible')
            .and(
                'contain',
                'Las contraseñas deben tener al menos 8 caracteres.'
            )
    })
})
