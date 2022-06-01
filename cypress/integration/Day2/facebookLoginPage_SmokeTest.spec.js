describe('Login Page Smoke Test',()=>{
    
    it('Wrong password right username',()=>{
        cy.negativePasswordTesting()
    })

    it('Wrong username right password',()=>{
        cy.negativeUsernameTesting()
    })

    it('Wrong username and wrong password',()=>{
        cy.negativeUsernamePasswordTesting()
    })
})