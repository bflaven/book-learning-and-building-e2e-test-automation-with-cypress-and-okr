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


011_wp_admin_login_with_custom_config_file.cy.js


[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10

[LAUNCH]
- launch the runner
npx cypress open


- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/011_wp_admin_login_with_custom_config_file.cy.js"

- launch with a custom config
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/011_wp_admin_login_with_custom_config_file.cy.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


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

// Pass with --env e.g --env LANG="EN",port=4222,name="Bruno",project="MySuite_2e2"

let lang = Cypress.env('LANG');
let port = Cypress.env('port');
let name = Cypress.env('name');
let project = Cypress.env('project');

 




let url = Cypress.env('WP_BACK_FULL_DOMAIN');
let loginPage = Cypress.env('WP_BACK_LOGIN_PAGE');
let wpAdmin = Cypress.env('WP_BACK_SUBDIRECTORY');

let timer = 1000;
let timer_hurray = 20000;

const baseURL = Cypress.config('baseUrl');


describe('011_1 :: E2E-WP :: '+lang+' :: Check local WP backend :: VARIABLES ', function () {

    it('011_1_1 :: Check the env variables before accessing to WP backend', function () {
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

            // personal variables from WP_EN.conf.env.json
            cy.log('-- PERSONAL CYPRESS VARIABLES from WP_EN.conf.env.json --')
            cy.log('WP_BACK_DEFAULT_LANG :: '+Cypress.env('WP_BACK_DEFAULT_LANG')+'')
            
            if ((lang != null && lang != '')) {
                cy.log('lang :: '+Cypress.env('LANG')+'')
            }

            if ((port != null && port != '')) {
                cy.log('port :: '+Cypress.env('port')+'')
            }

            if ((name != null && name != '')) {
                cy.log('name :: '+Cypress.env('name')+'')

            }

            if ((project != null && project != '')) {
                cy.log('project :: '+Cypress.env('project')+'')
            }


                        

          })

})

describe('011_2 :: E2E-WP  :: '+lang+' :: Check local WP backend :: LOGIN ', function () {

       it ('011_2_1 :: Login to WP with your Credentials', () => {
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




