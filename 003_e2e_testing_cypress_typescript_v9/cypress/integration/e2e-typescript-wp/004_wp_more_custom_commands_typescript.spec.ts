/// <reference types="Cypress" />
/**
 * This file is part of the book package: "Learning and Building E2E test automation with Cypress & OKR. Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality"
*
* @more
* Blog :: https://flaven.fr/
* Amazon :: https://amzn.to/2WQbRpA
* Github :: https://github.com/bflaven
* Youtube :: https://bit.ly/2WPlpAU
*
*
 *
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Intended to Define, Code & Apply an E2E strategy with Cypress & Objectives Key Results with PO mindset focus on Quality
 *
 * @package Cypress, OKR, WordPress Testing 
 * @subpackage FRONTOFFICE & BACKOFFICE
 * @since Cypress: cypress@9.7.0, node: v18.0.0, WordPress: wordpress-6.1.1, npx: 8.6.0

 */
/*

004_wp_more_custom_commands_typescript.spec.ts

[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_typescript_v9/

[LAUNCH]
- launch the runner
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false
npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false

*/




describe('002 :: E2E-WP :: Check local WP backend and show some custom command ', function () {
  
  it('002_1 :: Visit the WP', function () {
    cy.visit('/')
  })

  it.skip('002_2 :: Some custom commands in TypeScript', function () {


        cy.getDuckduckgo()
        cy.wait(1000)
        
        cy.logMe('Hello Prisca')
        cy.wait(1000)


        cy.LogUser('bruno', 'admin456')
        cy.wait(1000)

        cy.dataCy('greeting from dataCy')
        cy.wait(1000)


    })

  it('002_3 :: More custom commands in TypeScript', function () {


    
        // From support/commands/updateApi.ts
        cy.addNewApi("Robert", 40, 100)
        cy.wait(1000)

        cy.updateApi("Thomas", 5634)
        cy.wait(1000)

        // From support/commands/addPost.ts
        cy.addPost('My post with TS ')
        cy.wait(1000)

    


    })


    it.skip('END :: END TESTING', function () {
        cy.WpEndTest()
    })

})
