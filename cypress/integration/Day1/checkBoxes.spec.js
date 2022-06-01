/// <reference types="cypress" />

describe('Checkboxes testing',()=>{  // header of my test cases (Ticket or US)

    it('Checkbox testing',()=>{
        cy.visit('http://practice.cybertekschool.com/checkboxes');
        cy.get('#box1').check().should('be.checked');
        //cy.viewport('ipad-mini'); // test with ipad-mini screen
        cy.wait(1000);
        cy.get('[name="checkbox2"]').click().should('not.be.checked');
    })
    


}) 
