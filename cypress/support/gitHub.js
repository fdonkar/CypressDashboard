import { gitHubSignInUrl,gitHubUrl } from "./authentication.constant";

export class gitHub{

    verifySignInUrl(){
        cy.contains("Sign in").click()
        cy.url().should('eq',gitHubSignInUrl)
    }

    navigateToMainPage(){
        cy.go('back')
        
    }

}

export const onGitHubPage = new gitHub();
