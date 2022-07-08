class FaturamentoPage {

    editarFaturamento(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, celular, email, nota) {
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        //.select('Brasil')
        //.check()
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(celular)
        cy.get('#billing_email').clear().type(email)
        cy.get('#order_comments').clear().type(nota)
        cy.get('#terms').check()
        cy.get('#place_order').click()
    }

}

export default new FaturamentoPage()