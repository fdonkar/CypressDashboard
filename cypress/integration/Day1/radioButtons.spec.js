/// <reference types="cypress" />

import {URL} from "../../support/authentication"

describe('Radio button testing',()=>{  // header of my test cases (Ticket or US)

    it('Verify all the radio buttons are checked',()=>{
        cy.visit(URL);

        cy.get('[type="radio"]').then(radioButtons =>{
            cy.wrap(radioButtons).first().check().should('be.visible');


            for(let i=0; i<radioButtons.length; i++){
                cy.wrap(radioButtons).eq(i).check({force:true}).should('be.visible')
                cy.wait(500)
                console.log(i);
            }
        })
    })
    


}) 
