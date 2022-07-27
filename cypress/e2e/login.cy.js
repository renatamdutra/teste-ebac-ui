///<reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () => {

  beforeEach(()=> {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

  });

  it ('Deve fazer login com sucesso', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')

  });

  it ('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    
});

it ('Deve fazer login com sucesso - Usando fixture', () => {
      cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, {log: false})
      cy.get('.woocommerce-form > .button').click()

      })
  
});


  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('aluno_ebacteste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'usuário')

  });

  it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')
      
  });

});