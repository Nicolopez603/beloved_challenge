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
            method: 'POST',
            url: 'https://api.chucknorris.io/jokes/random',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).not.to.equal(statusOK)
        })
    })

    it('Response contains an additional property', () => {
        cy.request('https://api.chucknorris.io/jokes/random')
            .its('body')
            .should('not.have.property', 'nonexistantProperty')
    })

    it('API is secure against malicious payloads', () => {
        const maliciousPayload = '<script>alert("XSS Attack")</script>'
        cy.request({
            method: 'POST',
            url: 'https://api.chucknorris.io/jokes/random',
            body: maliciousPayload,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).not.to.equal(statusOK)
        })
    })
})
