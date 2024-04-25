/// <reference types="cypress" />
import TodoistLoginPage from '../../support/pages/todoist-login'

describe('Login Suite', () => {
    beforeEach(() => {
        cy.visit('auth/login')
        cy.location('protocol').should('contains', 'https')
    })
    it('Succesfull Login', () => {
        TodoistLoginPage.succesfullLogin()
    })

    it('Invalid login with wrong credentials', () => {
        TodoistLoginPage.invalidLogin()

        cy.get('._966b120f > .F9gvIPl').should('be.visible')
    })

    it('Invalid Login - No email', () => {
        TodoistLoginPage.invalidLoginWithoutEmail()

        cy.get('._966b120f > .F9gvIPl').should('be.visible')
    })

    it('Invalid Login - No password', () => {
        TodoistLoginPage.invalidLoginWithoutPassword()

        cy.get('._966b120f > .F9gvIPl').should('be.visible')
    })

    it('Invalid Login - Without password and Email', () => {
        TodoistLoginPage.invalidLoginWithoutPasswordAndEmail()

        cy.get('._966b120f > .F9gvIPl').should('be.visible')
    })
})
