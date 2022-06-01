describe('JavaScript Alerts Testing',()=>{

    it('Handling JS Alert - Validate alert text and click OK',()=>{

        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert',(str)=>{ // if we have only one option (like ok) we don't have to use this methods. click method is enough
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm',()=>true)
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
        
    it('Handling JS Confirm - Click OK',()=>{

        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(str)=>{ 
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>true)
        cy.get('#result').should('have.text','You clicked: Ok')
        
    })

    it('Handling JS Confirm - Click Cancel',()=>{ // if you put it.only, cypress execute only this test case.

        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(str)=>{ 
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text','You clicked: Cancel')
        
    })

    it.only('Handling JS Prompt - Input text in prompt, click ok and validate the input text',()=>{ // if you put it.only, cypress execute only this test case.

        cy.visit('http://practice.cybertekschool.com/javascript_alerts')

        cy.window().then((window)=>{
            cy.stub(window,'prompt').returns('This is a test text')
            cy.get('[onclick="jsPrompt()"]').click()
        })
        
        cy.get('#result').should('have.text','You entered: This is a test text')
        
    })

    
})


