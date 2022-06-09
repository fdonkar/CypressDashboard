import {modelSURL,comparePageUrl} from '../support/authentication.constant'
var data = require('../fixtures/modelSPage.json')
var compareData = require('../fixtures/compareModels.json')


export class ModelS{

    urlVerification(){
        cy.contains('Model S').click()
        cy.url().should('eq',modelSURL)
    }

    privacyVerification(){
        cy.scrollTo('bottomLeft')
        cy.get('[class="tds-link tcl-link"]').each((el,index)=>{
            const text = el.text()
            expect(text).to.equal(data.ModelS[index])
        })
    }

    // navigate to page https://www.tesla.com/models
    // click compare 
    // check every single text on the page 
    compareVerification(){
        cy.get('[title="Compare"]').click()
        cy.url().should('eq', comparePageUrl)
        cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each((el,index)=>{
            const text = el.text()
            expect(text).to.equal(compareData.CompareModels[index])
        })
    

    }

}




export const onModelSPage = new ModelS;

