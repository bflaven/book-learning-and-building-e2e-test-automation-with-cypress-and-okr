// Link the commands.d.ts with commands.d.ts to show jsdoc in cypress
/// <reference path="./commands.d.ts" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// cy.WpEndTest()
Cypress.Commands.add('WpEndTest', () => {
    cy.log(' -- WpEndTest function --')
    cy.log('(ʘ_ʘ) --- TESTING --- (ʘ_ʘ)')     
});


// New custom commands
// cy.logMe()
Cypress.Commands.add('logMe', (msg) => {
    cy.log(' -- logMe function --')
    cy.log(msg)
});


// cy.getDuckduckgo()
Cypress.Commands.add('getDuckduckgo', () => {
    cy.log(' -- getDuckduckgo function --')
    cy.visit('https://duckduckgo.com/')
});



Cypress.Commands.add('dataCy', (input) => {
    cy.log(' -- dataCy function --')
    cy.log('show input :: '+input+'')  
})

// cy.LogUser
Cypress.Commands.add('LogUser', (username, password) => {
    cy.log(' -- LogUser function --')
    cy.log(username)
    cy.log(password)
})

