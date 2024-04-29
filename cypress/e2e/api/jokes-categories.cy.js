// <reference types="cypress" />

describe('Chuck Norris API - Categories Endpoint', { tags: '@smoke' }, () => {
    const categoryEndpoint = 'https://api.chucknorris.io/jokes/categories'
    const statusOK = 200

    function makeRequest(
        method = 'GET',
        url = categoryEndpoint,
        failOnStatusCode = false
    ) {
        return cy.request({
            method,
            url,
            failOnStatusCode,
        })
    }

    it('Get joke categories', () => {
        makeRequest().its('status').should('equal', statusOK)
    })

    it('Category response contains expected data structure', () => {
        makeRequest()
            .its('body')
            .should('be.an', 'array')
            .and('not.be.empty')
            .and('not.contain', null)
            .and('not.contain', undefined)
            .and('not.contain', NaN)
            .and('not.have.length', 0)
            .then((categories) => {
                categories.forEach((category) => {
                    expect(category).to.be.a('string')
                    expect(category).to.not.be.empty
                })
            })
    })

    it('Categories response does not contain duplicates', () => {
        makeRequest()
            .its('body')
            .then((categories) => {
                const uniqueCategories = new Set(categories)
                expect(uniqueCategories.size).to.equal(categories.length)
            })
    })

    it('Categories response contains expected values', () => {
        makeRequest()
            .its('body')
            .then((categories) => {
                expect(categories).to.include('career')
                expect(categories).to.include('explicit')
            })
    })

    it('Response does not contain an additional property', () => {
        makeRequest()
            .its('body')
            .should('not.have.property', 'nonexistantProperty')
    })
})
