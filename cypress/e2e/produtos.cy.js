/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da loja', ()=> {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Apollo Running Short')
            .click()

    });

    it('deve adicionar um produto ao carrinho', () => {
            var quantidade = 1
        
            cy.get('[class="product-block grid"]')
                .contains('Apollo Running Short').click()
            cy.get('.button-variable-item-34').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            
    });

    it('deve adicionar produtos ao carrinho - usando comandos customizados', () => {
        cy.addPodutos('Apollo Running Short', '36', 'Black', 1)
        
    });

});