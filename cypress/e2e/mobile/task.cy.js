/// <reference types="cypress" />
import TodoistLoginPage from '../../support/pages/mobile/todoist-login'
import TodoistTaskPage from '../../support/pages/mobile/todoist-task'

describe('Task Suite', { tags: '@smoke' }, () => {
    beforeEach(() => {
        cy.visit('auth/login')
        cy.location('protocol').should('contains', 'https')
        TodoistLoginPage.succesfullLogin()
        cy.viewport('iphone-xr')
    })
    it('Create a task', () => {
        TodoistTaskPage.createATask()
    })

    it('marks all tasks as completed with one command', () => {
        TodoistTaskPage.createATask()

        // Select all of the elements 'checkbox'
        cy.get('span.PtDaWGV').as('taskButtons')
        cy.get('@taskButtons').then(($buttons) => {
            //Click in each checkbox
            $buttons.each((index, button) => {
                cy.wrap(button).click()
            })
        })

        cy.get('._1b5f8e86').should('contain.text', '1 tarea completada')
    })
})
