
var data = require('../../fixtures/staging.json')


describe('Handling each function',()=>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').clear().type('Admin')
        cy.get('#txtPassword').clear().type('admin123')
        cy.get('[class="button"]').click()
    })

    it('Testing each text',()=>{ // we use for each loop to find all elements whose locator is quickLinkText
        cy.get('.quickLinkText').each((element,index)=>{
            cy.log('element : ' , element.text())
            const text = element.text()

            expect(text).to.contain(data.quickLaunch[index])
        })
    })
})