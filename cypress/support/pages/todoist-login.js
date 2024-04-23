import { faker } from '@faker-js/faker'

export default class TodoistLoginPage {
    elements = {}

    visit() {
        cy.visit('auth/login')
    }

    Login() {}
}

module.exports = new TodoistLoginPage()
