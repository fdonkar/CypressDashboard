
/// <reference types="cypress" />

describe('Self practice testing',()=>{  // header of my test cases (Ticket or US)

    it('Notification message testing',()=>{
        cy.visit('http://practice.cybertekschool.com/notification_message_rendered');
        cy.get('a').contains('Click here').click()
        cy.wait(2000)
        cy.get('[class="flash notice"]').should('have.text','Action successful')
    
    })
    


}) 



