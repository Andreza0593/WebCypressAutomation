/// <reference types="cypress"/>

describe('Login', () => {

    beforeEach('Acessar a aplicação', () => {

        //Dado
        //Acessar a aplicação
        cy.visit('/login')
    })

    it('Login com sucesso', () => {
        
        //Preencher credenciais
        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('123456')

        //Quando
        //Clicar em entrar
        cy.get('#btnLogin').click()

        //Então
        //Vejo mensagem de sucesso
        cy.get('#swal2-title').should('have.text', 'Login realizado')
        cy.url().should('include', '/my-account')
    })

    it('Senha inválida', () => {
        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('E-mail inválido', () => {
        cy.get('#user').type('eduardo.finotti@qazando')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('E-mail vazio', () => {
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Senha vazia', () => {
        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('Campos vazios', () => {
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})