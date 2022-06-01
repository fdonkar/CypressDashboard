
describe('Testing the login page', ()=>{

    it('Positive Test',()=>{

        cy.visit('https://www.staging.counselhero.com/')
        cy.get('[class="nav-btn dashboard-btn"]').should('be.visible').click()
        cy.get('[name="username"]').should('be.visible').type('tester_20')
        cy.get('[type="password"]').should('be.visible').type('12345678')
        cy.get('[class="pix-btn btn btn-big btn-primary my-1"]').should('be.enabled').click()
        cy.get('[class="page-title"]').should('have.text','Dashboard')

    })

    it('Negative Testing with valid username and invalid password',()=>{

        cy.visit('https://www.staging.counselhero.com/')
        cy.get('[class="nav-btn dashboard-btn"]').should('be.visible').click()
        cy.get('[name="username"]').should('be.visible').type('tester_20')
        cy.get('[type="password"]').should('be.visible').type('12345678')
        cy.get('[class="pix-btn btn btn-big btn-primary my-1"]').should('be.enabled').click()
        cy.get('[class="page-title"]').should('have.text','Dashboard')

    })



})