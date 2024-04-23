/// <reference types="cypress" />
describe('Endpoint /jokes/random', () => {
  const statusOK = 200

  it('Get a random joke', () => {
    cy.request('https://api.chucknorris.io/jokes/random')
      .its('status')
      .should('equal', statusOK)
  })

  it('Random joke contains a property "value"', () => {
    cy.request('https://api.chucknorris.io/jokes/random')
      .its('body')
      .should('have.property', 'value')
  })

  it('Random joke contains a property "icon_url"', () => {
    cy.request('https://api.chucknorris.io/jokes/random')
      .its('body')
      .should('have.property', 'icon_url')
  })

  it('Invalid request returns error', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.chucknorris.io/jokes/random',
      failOnStatusCode: false,
    })
      .its('status')
      .should('not.equal', statusOK)
  })

  it('Response contains an additional property', () => {
    cy.request('https://api.chucknorris.io/jokes/random')
      .its('body')
      .should('not.have.property', 'nonexistantProperty')
  })
})
