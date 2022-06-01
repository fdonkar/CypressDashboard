
describe('File Upload',()=>{

    it('Png file upload',()=>{
        cy.visit('http://practice.cybertekschool.com/upload')
        cy.get('#file-upload').attachFile('ap.png')
        cy.get('[class="button"]').click()

        //cy.get('#uploaded-files').invoke('text','apologize.png').should('be.visible') // invoke change the value of uploaded file I think. 
        cy.get('#uploaded-files').should('contain.text','ap.png').should('be.visible')
    
    })
})