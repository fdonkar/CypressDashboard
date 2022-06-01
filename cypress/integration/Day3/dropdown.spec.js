
/// <reference types="cypress" />

var data = require('../../fixtures/states.json')

describe('Dropdopn Testing',()=>{

    it('State Selection',()=>{

        cy.visit('http://practice.cybertekschool.com/dropdown')

        cy.get('[id="state"] > option').each((el,index)=>{

            const text = el.text()

            expect(text).to.contain(data.states[index])

            cy.get('[id="state"]').select(el.text()).should('be.visible')
        })
        
    })

    // navigate to page to http://practice.cybertekschool.com/dropdown
    // select your birthday by yyyy/mm//dd
    
    it('Birthday Selection',()=>{

        cy.visit('http://practice.cybertekschool.com/dropdown')
        cy.get('#year').select('1987').should('be.visible')
        cy.get('#month').select('January').should('be.visible')
        cy.get('#day').select('24').should('be.visible')

    })
    
})



