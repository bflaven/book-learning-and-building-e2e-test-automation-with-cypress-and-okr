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


010_wp_admin_login_with_cypress_env.spec.js


[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[launch]
- launch the runner
npx cypress open

- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/010_wp_admin_login_with_cypress_env.spec.js"



 */

/*
    "WP_BACK_LOGIN_USERNAME": "admin",
    "WP_BACK_LOGIN_PASSWORD": "admin",
    "WP_BACK_LOGIN_PAGE": "/wp-login.php",
    "WP_BACK_SUBDIRECTORY": "wp-admin/",
*/






// let username = Cypress.env('WP_BACK_LOGIN_USERNAME');
// let password = Cypress.env('WP_BACK_LOGIN_PASSWORD');

// superadmin
let username = Cypress.env("users").superadmin.LOGIN_USERNAME;
let password = Cypress.env("users").superadmin.LOGIN_PASSWORD;

// administrator
// let username = Cypress.env("users").administrator.LOGIN_USERNAME;
// let password = Cypress.env("users").administrator.LOGIN_PASSWORD;

// editor
// let username = Cypress.env("users").editor.LOGIN_USERNAME;
// let password = Cypress.env("users").editor.LOGIN_PASSWORD;

// author
// let username = Cypress.env("users").author.LOGIN_USERNAME;
// let password = Cypress.env("users").author.LOGIN_PASSWORD;

// contributor
// let username = Cypress.env("users").contributor.LOGIN_USERNAME;
// let password = Cypress.env("users").contributor.LOGIN_PASSWORD;

// subscriber
// let username = Cypress.env("users").subscriber.LOGIN_USERNAME;
// let password = Cypress.env("users").subscriber.LOGIN_PASSWORD;


let url = Cypress.env('WP_BACK_FULL_DOMAIN');
let loginPage = Cypress.env('WP_BACK_LOGIN_PAGE');
let wpAdmin = Cypress.env('WP_BACK_SUBDIRECTORY');

let timer = 1000;
let timer_hurray = 20000;

const baseURL = Cypress.config('baseUrl');


describe('010_1 :: E2E-WP :: Check local WP backend :: VARIABLES ', function () {

    it('010_1_1 :: Check the env variables before accessing to WP backend', function () {
            cy.visit('/')

            // Work with V5 for cypress.json

            // global variables from cypress.json
            cy.log('-- GLOBAL CYPRESS VARIABLES --')
            cy.log('baseUrl :: '+Cypress.config('baseUrl')+' ')

            // personal variables from cypress.json
            cy.log('-- PERSONAL CYPRESS VARIABLES --')
            cy.log('WP_BACK_LOGIN_USERNAME :: '+Cypress.env('WP_BACK_LOGIN_USERNAME')+'')
            cy.log('WP_BACK_LOGIN_PASSWORD :: '+Cypress.env('WP_BACK_LOGIN_PASSWORD')+'')
            cy.log('WP_BACK_LOGIN_PAGE :: '+Cypress.env('WP_BACK_LOGIN_PAGE')+'')
            cy.log('WP_BACK_SUBDIRECTORY :: '+Cypress.env('WP_BACK_SUBDIRECTORY')+'')

    // personal variables from cypress.env.json
    cy.log('-- PERSONAL CYPRESS VARIABLES from cypress.env.json --')
    cy.log('username :: superadmin :: '+Cypress.env("users").superadmin.LOGIN_USERNAME+'')
    cy.log('password :: superadmin :: '+Cypress.env("users").superadmin.LOGIN_PASSWORD+'')


          })

})

describe('010_2 :: E2E-WP :: Check local WP backend :: LOGIN ', function () {

       it ('010_2_1 :: Login to WP with your Credentials', () => {
        cy.log('\n --- go the hp')
        cy.visit('/')
        cy.wait(timer)
        cy.log('\n --- go the backend')

        // Way_1
        // cy.visit(''+baseURL+loginPage+'')
        // cy.visit(''+baseURL+''+loginPage+'')
        // cy.visit(''+loginPage+'')
        // cy.visit(loginPage)

        // Way_2
        // Normally WordPress will redirect you to the login form
        // cy.visit(''+baseURL+wpAdmin+'')
        // cy.visit(''+baseURL+''+wpAdmin+'')
        // cy.visit(''+wpAdmin+'')
        cy.visit(wpAdmin)
        cy.wait(timer)


        cy.log('\n --- fill the form')

        // Way_3
        cy.get('#user_login' ).type(username)
        cy.get('#user_pass' ).type(password)

        cy.get('#wp-submit' ).click()
        cy.log('\n --- I am in WP Backend!')
        cy.wait(timer_hurray)
    })

})

