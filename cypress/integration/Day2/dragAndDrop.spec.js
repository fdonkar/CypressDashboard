
describe('Drag and drop features',()=>{
    it('Drag and drop using data transfer',()=>{
        cy.visit('http://practice.cybertekschool.com/drag_and_drop')
        dragAndDrop();
    })
})

const dataTransfer = new DataTransfer;

function dragAndDrop(){
    cy.get('#column-a').should('be.visible').trigger('dragstart',{dataTransfer})
    cy.wait(1000)
    cy.get('#column-b').should('be.visible').trigger('drop',{dataTransfer})
    cy.wait(1000)
    cy.get('#column-b').should('be.visible').trigger('dragend')
}