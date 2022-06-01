import {modelSURL} from '../support/authentication.constant'
var data = require('../fixtures/modelSPage.json')


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

}

export const onModelSPage = new ModelS;

