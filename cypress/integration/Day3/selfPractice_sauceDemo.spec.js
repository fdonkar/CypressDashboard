
describe('End to End testing - Sauce Demo',()=>{

    it('End to end',()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[class="shopping_cart_badge"]').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('test')
        cy.get('#last-name').type('tester')
        cy.get('#postal-code').type('17100')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('[class="complete-header"]').should('have.text','THANK YOU FOR YOUR ORDER')





    })
})
