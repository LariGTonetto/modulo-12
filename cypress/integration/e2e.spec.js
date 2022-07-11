/// <reference types="cypress" />

var faker = require('faker');

import FaturamentoPage from '../support/page_objects/faturamento-page.js'
const dadosFaturamento = require('../fixtures/faturamento.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    //print das ações
    afterEach(() => { cy.screenshot() });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //entrar no site
        cy.visit('http://lojaebac.ebaconline.art.br/')

        //tela de login e cadastro
        cy.get('.icon-user-unfollow').click()

        //pre cadastro - Usando Faker
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        //clicar em comprar
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //adicionar produto - Usando Comandos Customizados
        cy.addProdutosA('Aero Daily Fitness Tee', 3)
        cy.addProdutosB('Ajax Full-Zip Sweatshirt', 2)
        cy.addProdutosC('Ariel Roll Sleeve Sweatshirt', 1)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
       
        //detalhes de faturamento - Usando Arquivo de Dados
        var indice = 0
        FaturamentoPage.editarFaturamento(
            dadosFaturamento[indice].nome,
            dadosFaturamento[indice].sobrenome,
            dadosFaturamento[indice].empresa,
            dadosFaturamento[indice].pais,
            dadosFaturamento[indice].rua,
            dadosFaturamento[indice].numero,
            dadosFaturamento[indice].cidade,
            dadosFaturamento[indice].estado,
            dadosFaturamento[indice].cep,
            dadosFaturamento[indice].celular,
            dadosFaturamento[indice].email,
            dadosFaturamento[indice].nota)

        //pedido recebido
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });

})