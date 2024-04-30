Cypress.Commands.add(
    'guiLogin',
    (
        username = Cypress.env('TODOIST_EMAIL'),
        password = Cypress.env('TODOIST_PASSWORD')
    ) => {
        cy.visit('auth/login')
        cy.get('#element-0').type(username, { log: false })
        cy.get('#element-3').type(password, { log: false })
        cy.get('._966b120f > .F9gvIPl').click()
    }
)

Cypress.Commands.add(
    'sessionLogin',
    (
        username = Cypress.env('TODOIST_EMAIL'),
        password = Cypress.env('TODOIST_PASSWORD')
    ) => {
        const login = () => cy.guiLogin(username, password)
        cy.session(username, login)
    }
)
