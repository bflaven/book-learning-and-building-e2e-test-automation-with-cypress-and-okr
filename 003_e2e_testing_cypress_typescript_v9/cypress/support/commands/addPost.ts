// addPost.ts
Cypress.Commands.add('addPost', (input: string) => {
    cy.log('show input :: '+input+'')

    // NOT IN USE BIT IT PROVE THAT YOU CAN USE CYPRESS COMMAND
    // cy.get('input[name=post_title]').type('Title '+input+' '+startDateString+' '+RandomString+' ')
    // cy.wait(1000)
    // cy.get('#content').type('Content for title')
  
})