// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutosA', (nome1, quantidade1) => {
    cy.get('[class="product-block grid"]').contains(nome1).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.input-text').clear().type(quantidade1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
});

Cypress.Commands.add('addProdutosB', (nome2, quantidade2) => {
    cy.get('[class="product-block grid"]').contains(nome2).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(quantidade2)
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()

});

Cypress.Commands.add('addProdutosC', (nome3, quantidade3) => {
    cy.get('[class="product-block grid"]').contains(nome3).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.input-text').clear().type(quantidade3)
    cy.get('.single_add_to_cart_button').click()
});
