<reference types="cypress" />

// visit
cy.visit('open url');
cy.visit('url',{timeout : 10000})

//should is promise
cy.url().should('include','blablabla')

// finding the element
cy.get(loc).click();
cy.get(loc).should('be.visible')

//negative ones 
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.length',3)
cy.get('h1').should('have.text','blablabla')
cy.get('h1').should('have.value','cypress')

//parent to the child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click();

cy.go('back')
cy.get('tbody tr').nextAll.click({multiple:true}) // go and click 10 elements 

cy.get(loc).prev.click()
cy.get(loc).prevAll.click({multiple:true})

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click() // click top of a button /bottom,right,left

cy.get('#username').clear().type('myUsername')