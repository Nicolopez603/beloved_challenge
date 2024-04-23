/// <reference types="cypress" />
import TodoistLoginPage from '../../support/pages/todoist-login'
import TodoistTaskPage from '../../support/pages/todoist-task'
import { faker } from '@faker-js/faker'

describe('Task Suite', () => {
  beforeEach(() => {
    cy.visit('auth/login')
    cy.location('protocol').should('contains', 'https')
    TodoistLoginPage.succesfullLogin()
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
