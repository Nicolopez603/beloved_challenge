import { faker } from '@faker-js/faker'
const statusOK = 200

describe('Endpoint /jokes/search', () => {
    const searchQuery = faker.lorem.words(2)

    it('Search jokes by query', () => {
        cy.request(
            `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
        )
            .its('status')
            .should('equal', statusOK)
    })

    it('Search result contains a "result" property', () => {
        cy.request(
            `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
        )
            .its('body')
            .should('have.property', 'result')
    })

    it('Search result is an array', () => {
        cy.request(
            `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
        )
            .its('body.result')
            .should('be.an', 'array')
    })

    it('Request without query returns an error', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.chucknorris.io/jokes/search',
            failOnStatusCode: false,
        })
            .its('status')
            .should('not.equal', statusOK)
    })

    it('Answer does not contain an additional property', () => {
        cy.request(
            `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
        )
            .its('body')
            .should('not.have.property', 'nonExistentProperty')
    })
})
