/// <reference types="cypress" />


describe('Web elements',()=>{

    // tag name
    cy.get('input') //directly type the tag name 

    // by ID
    cy.get('#radio1') // id value with #

    // by class name
    cy.get('.iCheck-helper') // class value with . (dot)

    // by attritube name 
    cy.get('[type]')

    // by attribute name and value
    cy.get('[name="abuse"]')

    // by class value
    cy.get('[class="iCheck-helper"]')

    // by tag name and attribute with value 
    cy.get('input [name="abuse"]')

    // by two different attribute or more 
    cy.get('[name="abuse"][class="iCheck-helper"][type]')

    // by text of the element 
    cy.contains('Blue').click


})