import {gitHubUrl} from '../../support/authentication.constant'
import { onGitHubPage } from '../../support/gitHub'


describe('GitHub Test Cases',()=>{

    beforeEach('Navigate to page GitHub',()=>{
        cy.visit(gitHubUrl)
        
    })

    it('Login to the GitHub',()=>{
        
        onGitHubPage.verifySignInUrl()

    })

    it('Navigate to page back',()=>{
        onGitHubPage.navigateToMainPage()
    })
})