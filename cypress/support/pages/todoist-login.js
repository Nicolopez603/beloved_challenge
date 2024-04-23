export default class TodoistLoginPage {
    elements = {
        emailInput: () => cy.get('#element-0'),
        passwordInput: () => cy.get('#element-3'),
        submitButton: () => cy.get('._966b120f > .F9gvIPl'),
    }

    visit() {
        cy.visit('auth/login')
    }

    succesfullLogin() {
        this.elements
            .emailInput()
            .type(Cypress.env('TODOIST_EMAIL'), { log: false })
        this.elements
            .passwordInput()
            .type(Cypress.env('TODOIST_PASSWORD'), { log: false })
        this.elements.submitButton().click()
    }

    invalidLogin() {
        this.elements.emailInput().type(Cypress.env('TODOIST_INVALID_EMAIL'))
        this.elements
            .passwordInput()
            .type(Cypress.env('TODOIST_INVALID_PASSWORD'))
        this.elements.submitButton().click()
    }

    invalidLoginWithoutEmail() {
        this.elements.emailInput()
        this.elements
            .passwordInput()
            .type(Cypress.env('TODOIST_INVALID_PASSWORD'))
        this.elements.submitButton().click()
    }

    invalidLoginWithoutPassword() {
        this.elements.emailInput().type(Cypress.env('TODOIST_INVALID_EMAIL'))
        this.elements.passwordInput()
        this.elements.submitButton().click()
    }

    invalidLoginWithoutPasswordAndEmail() {
        this.elements.emailInput()
        this.elements.passwordInput()
        this.elements.submitButton().click()
    }
}

module.exports = new TodoistLoginPage()
