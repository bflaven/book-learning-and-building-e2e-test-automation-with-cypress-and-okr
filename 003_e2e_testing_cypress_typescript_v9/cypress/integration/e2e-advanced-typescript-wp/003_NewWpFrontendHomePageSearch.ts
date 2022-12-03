// type definitions for Cypress object "cy"
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

003_NewWpFrontendHomePageSearch.ts
This file is using Class e2e_testing_cypress_typescript_v9/pageobjects/WpFrontendHomePageSearch.ts imported in /support/index.ts



[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_typescript_v9/



[LAUNCH]
- launch the runner
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false
npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false


*/



describe('005 :: WP :: POM CONCEPT ::  ensure the minimum WP backend functioning @homepage @search :: Testing :: VISIT HOMEPAGE, CHECK SEARCH RESULT', function () {

        it('005_1 :: WP :: POM CONCEPT :: VISIT HOMEPAGE, CHECK SEARCH RESULT ', function () {
                    
                    cy.log(' -- NewSearch function --')

                    cy.NewSearch('CMS')


                    // 3 ways to test the same thing on GUI
                    cy.get('#main > header > h1 > span:contains("CMS")', {timeout: 10000})
                    cy.get('#main > header > h1 > span', {timeout: 10000}).should('contain', 'CMS')
                    cy.get('#main > header > h1 > span', {timeout: 10000}).should('have.text', 'CMS')

                   })

})


















