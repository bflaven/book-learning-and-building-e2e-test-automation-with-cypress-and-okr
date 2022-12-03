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

004_wp_admin_login_playing_env_v4.cy.js

[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10

[launch]
- launch the runner
npx cypress open

 */

/*



           
    "LOCALHOST_MAIN_DOMAIN": "cypress.mydomain.priv",
    "LOCALHOST_WP_PROTOCOL": "http://",
    "LOCALHOST_WP_SUBDIRECTORY": "/wordpress/",
    "CYPRESS_PROJECT_NAME": "e2e-wp",
    "CYPRESS_PROJECT_NAME_DESCRIPTION": "This is the WP Local website for Cypress Book",
    "MY_BOOLEAN":true,
    "MY_INT": 9,
    "MY_STRING":"my_env_var_capital",
    "YourVarNameCypressJson":"my_env_var_camelCase"
            */

describe('004_1 :: E2E-WP :: Check local WP backend :: 04_wp_admin_login_playing_env.spec.js ', function () {

    it('check the env variables before accessing to WP backend', function () {
            cy.visit('/')

            // Work with V4 for cypress.json
            // global variables from cypress.json
            cy.log('### 1. GLOBAL VARIABLES CYPRESS ###')
            cy.log('baseUrl :: '+Cypress.config('baseUrl')+' ')
            cy.log('projectId :: '+Cypress.config('projectId')+' ')
            cy.log('experimentalStudio :: '+Cypress.config('experimentalStudio')+' ')
            cy.log('viewportWidth :: '+Cypress.config('viewportWidth')+' ')
            cy.log('viewportHeight :: '+Cypress.config('viewportHeight')+' ')
            cy.log('defaultCommandTimeout :: '+Cypress.config('defaultCommandTimeout')+' ')

            // personal variables from cypress.json
            cy.log('### 2. PERSONAL VARIABLES CYPRESS ###')
            cy.log('-- WP_FRONT --')
            cy.log('WP_FRONT_FULL_DOMAIN :: '+Cypress.env('WP_FRONT_FULL_DOMAIN')+'')
            cy.log('WP_FRONT_SITE_TITLE :: '+Cypress.env('WP_FRONT_SITE_TITLE')+'')
            cy.log('WP_FRONT_TAGLINE :: '+Cypress.env('WP_FRONT_TAGLINE')+'')

            cy.log('-- WP_BACK --')            
            cy.log('WP_BACK_LOGIN_USERNAME :: '+Cypress.env('WP_BACK_LOGIN_USERNAME')+'')
            cy.log('WP_BACK_LOGIN_PASSWORD :: '+Cypress.env('WP_BACK_LOGIN_PASSWORD')+'')
            cy.log('WP_BACK_DEFAULT_LANG :: '+Cypress.env('WP_BACK_DEFAULT_LANG')+'')


            cy.log('-- LOCALHOST --')
            cy.log('LOCALHOST_MAIN_DOMAIN :: '+Cypress.env('LOCALHOST_MAIN_DOMAIN')+'')
            cy.log('LOCALHOST_WP_PROTOCOL :: '+Cypress.env('LOCALHOST_WP_PROTOCOL')+'')
            cy.log('LOCALHOST_WP_SUBDIRECTORY :: '+Cypress.env('LOCALHOST_WP_SUBDIRECTORY')+'')

            cy.log('-- CYPRESS_PROJECT --')
            cy.log('CYPRESS_PROJECT_NAME :: '+Cypress.env('CYPRESS_PROJECT_NAME')+'')
            cy.log('CYPRESS_PROJECT_NAME_DESCRIPTION :: '+Cypress.env('CYPRESS_PROJECT_NAME_DESCRIPTION')+'')

            cy.log('-- OTHER --')
            cy.log('MY_BOOLEAN :: '+Cypress.env('MY_BOOLEAN')+'')
            cy.log('MY_INT :: '+Cypress.env('MY_INT')+'')
            cy.log('MY_STRING :: '+Cypress.env('MY_STRING')+'')
            cy.log('YourVarNameCypressJson :: '+Cypress.env('YourVarNameCypressJson')+'')


/*
            // Work with V5 for cypress.json
            cy.log(' -- env.WP_FRONT --')
            cy.log(' env.WP_FRONT.FULL_DOMAIN :: '+Cypress.env('WP_FRONT').FULL_DOMAIN+' ')
            cy.log(' env.WP_FRONT.SITE_TITLE :: '+Cypress.env('WP_FRONT').SITE_TITLE+' ')
            cy.log(' env.WP_FRONT.TAGLINE :: '+Cypress.env('WP_FRONT').TAGLINE+' ')
*/         

            

              })

})

