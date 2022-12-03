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


login.js


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
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('/wp-login.php')

})

When('User enters username as {string} and password as {string}', (username, password) => {
    
    // WP
    cy.get('#user_login').clear();
    cy.get('#user_login').type(username);
    cy.get('#user_pass').clear();
    cy.get('#user_pass').type(password);


})

And('User clicks on login button', () => {
    cy.get('#wp-submit').click();
})

Then('User is able to successfully login to the Website', () => {
    cy.get('#wpadminbar').click();
    cy.get('#wp-admin-bar-my-account > [aria-haspopup="true"]').should('be.visible');
})