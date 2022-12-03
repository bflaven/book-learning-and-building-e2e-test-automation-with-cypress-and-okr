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


006_wp_admin_login_simple.spec.js



[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[launch]
- launch the runner
npx cypress open

 */

describe('006_1 :: E2E-WP :: Check local WP backend :: VARIABLES ', function () {

    it('006_1_1 :: Check the env variables before accessing to WP backend', function () {
            cy.visit('/')

            // Work with V5 for cypress.json
            // global variables from cypress.json
            cy.log('-- GLOBAL CYPRESS VARIABLES --')
            cy.log('baseUrl :: '+Cypress.config('baseUrl')+' ')

            // personal variables from cypress.json
            cy.log('-- PERSONAL  CYPRESS VARIABLES --')
            cy.log('WP_BACK_LOGIN_USERNAME :: '+Cypress.env('WP_BACK_LOGIN_USERNAME')+'')
            cy.log('WP_BACK_LOGIN_PASSWORD :: '+Cypress.env('WP_BACK_LOGIN_PASSWORD')+'')
            cy.log('WP_BACK_FULL_DOMAIN :: '+Cypress.env('WP_BACK_FULL_DOMAIN')+'')

          })

})

describe('006_2 :: E2E-WP :: Check local WP backend :: LOGIN ', function () {

       it ('006_2_1 :: Login to WP with your Credentials', () => {
        cy.log('\n --- go the hp')
        cy.visit('/')
        cy.wait(3000)
        cy.log('\n --- go the backend')

        // Way_1
        // cy.visit(''+Cypress.config('baseUrl')+'/wp-login.php')
        cy.visit('/wp-login.php')

        // Way_2
        // Normally WordPress will redirect you to the login form
        // cy.visit(''+Cypress.config('baseUrl')+'/wp-admin/')
        // cy.visit('/wp-admin/')
        cy.wait(3000)


        cy.log('\n --- fill the form')

        // Way_1
        cy.get('#user_login' ).type('admin')
        cy.get('#user_pass' ).type('admin')

        // Way_2
        // cy.get('#user_login' ).type(Cypress.env( "WP_BACK_LOGIN_USERNAME"))
        // cy.get('#user_pass' ).type(Cypress.env( "WP_BACK_LOGIN_PASSWORD"))
        cy.get('#wp-submit' ).click()
        cy.log('\n --- I am in WP Backend!')
        cy.wait(20000)
    })

})

