/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () =>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        })
            
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        //cadastro de endereço
    });

});