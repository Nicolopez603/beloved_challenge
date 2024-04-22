/// <reference types="cypress" />
describe('Endpoint /jokes/categories', () => {
    const statusOK = 200
    it('Get joke categories', () => {
        cy.request('https://api.chucknorris.io/jokes/categories')
            .its('status')
            .should('equal', statusOK)
    })

    it('Joke categories contains an array', () => {
        cy.request('https://api.chucknorris.io/jokes/categories')
            .its('body')
            .should('be.an', 'array')
    })

    it('Category array is not empty', () => {
        cy.request('https://api.chucknorris.io/jokes/categories')
            .its('body')
            .should('not.be.empty')
    })

    it('Invalid request returns error', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.chucknorris.io/jokes/categories',
            failOnStatusCode: false,
        })
            .its('status')
            .should('not.equal', statusOK)
    })

    it('Response does not contain an additional property', () => {
        cy.request('https://api.chucknorris.io/jokes/categories')
            .its('body')
            .should('not.have.property', 'nonexistantProperty')
    })
})
