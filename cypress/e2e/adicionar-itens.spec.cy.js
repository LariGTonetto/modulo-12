/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.last()
            //.first()
            //.eq(3)
            .contains('Ajax Full-Zip Sweatshirt').click()

    });

    it.only('Deve adicionar produto no carrinho e concluir compra', () => {
        var quantidade = 4

        cy.get('[class="product-block grid"]').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

    });

    /*
    it('Deve adicionar produtos ao carrinho - Usando Comando Customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'XS', 'Brown', 4)
        
    });
    */

    
});