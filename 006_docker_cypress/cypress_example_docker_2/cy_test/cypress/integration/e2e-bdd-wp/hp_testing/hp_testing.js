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


hp_testing.js


[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[LAUNCH]
- launch the runner
npx cypress open --env LANG="EN" --config video=false,screenshotOnRunFailure=false
npx cypress open --env LANG="ES" --config video=false,screenshotOnRunFailure=false

# Launch a single feature file with no video and no screenshots
npx cypress run --env LANG="ES" --config video=false,screenshotOnRunFailure=false  --spec "cypress/integration/e2e-bdd-wp/login.feature"

# Launch all feature files
npx cypress run --env LANG="ES" --config video=false,screenshotOnRunFailure=false run --spec cypress/integration/e2e-bdd-wp/*.feature


 */
// have to import these, so that cypress can recognise cucumber keywords
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; 

Given("Visit the website frontend homepage", function(){ 
            cy.log('\n--- On HP')
            cy.visit("/")
})

When("Check the title website frontend homepage",()=>{
            cy.log('\n--- Check the title in HP')
            cy.title().should('eq', 'yalla_wp – Just another WordPress site')

})

And("Check details for website frontend homepage",function(){
        
            cy.log('Step_2 :: View More first post')
            cy.get('#post-32 > div > header > h2 > a').click()

 
            cy.log('Step_3 :: check main nav')
            cy.get('#primary-menu > ul').should('be.visible')
            

            cy.log('Step_4 :: check content main nav')
            cy.get('#primary-menu > ul')
                .children('li')
                .should('have.length', 4)
                .should('contain.text', 'About')
                .should('contain', 'Another Page')
                .should('contain', 'Contact')
                .should('contain', 'Sample Page')

            cy.go('back')
            cy.wait(1000)
})

Then("Going back and assert the title",()=>{
            cy.log('Step_1 :: On HP')
            cy.title().should('eq', 'yalla_wp – Just another WordPress site')
})