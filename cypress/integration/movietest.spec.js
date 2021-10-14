/* eslint-disable no-undef */

describe('movie-page', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('probando btn price', () => {
        cy.get('.price').click()
        cy.get('#text ').should('have.text', 'Elige un plan y mira lo que quieras en Movy.')
    })

    it('probando btn cancel', () => {
        cy.get('.cancel').click()
        cy.get('#mesGratis').should('have.text', 'DISFRUTAR UN MES GRATIS')
    })

    it('probando link login', () => {
        cy.get('#login').click()
        const newUser = 'juan@gmail'
        const newPass = '1234'
        cy.get('#input').type(`${newUser}{enter}`)
        cy.get('#inputPass').type(`${newPass}{enter}`)
        cy.get('#iniciarSesion').click()
    })

    it('porbando scroll', () => {
        cy.visit('http://localhost:3000/home')
        cy.get('.carouselBox').first().scrollTo('center')
        cy.get('.carouselBox').eq(1).scrollTo('center')
        cy.get('.carouselBox').last().scrollTo('right')
    })  

    it('carousel', () => {
        cy.visit('http://localhost:3000/home')
        cy.get('.carousel').first().children().should('have.length', 20)
    })
})