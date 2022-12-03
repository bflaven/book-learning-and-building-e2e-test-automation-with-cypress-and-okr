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


001_TestWpBackendDashboardLogin.spec.js


[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[LAUNCH]
- launch the runner
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false
npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false



- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/pom-wp/001_wp_pom.spec.js"

- launch with a custom config
npx cypress open --env LANG="pt_PT" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="it_IT" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="fr_FR" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="ru_RU" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="zh_CN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false


npx cypress open --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/pom-wp/001_wp_pom.spec.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="FR" --config-file "WP_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false



 */

const {globalValues} = require('../../support/allValuesVariables')

// Do  not forget to import the elements
import { WpBackendDashboardLogin } from '../../../pageobjects/WpBackendDashboardLogin.js'


    // Step_1
    before(function () {
        cy.log('--- WpDebug --- ')
        // cy.WpDebug()

    })

// NOTE_1 :: I have intentionally given a longer name to the variable, in this case a constant, so I can differentiate easiliy from the Class instantiation.


// NOTE_2 :: I create a new instance of the Class ouside the test above describe() or not in it() so the constant homePageAndSearch can exist in the scope of the all test.

    
describe('001 :: WP :: POM CONCEPT ::  ensure the minimum WP backend functioning @homepage @search :: Testing ' + globalValues.lang + ' :: VISIT HOMEPAGE, CHECK SEARCH RESULT', function () {



        it('001_1 :: WP :: POM CONCEPT :: NEW LOGIN POM ', function () {
    
                    // DEBUG
                    // cy.log('username :: '+globalValues.username+'')
                    // cy.log('password :: '+globalValues.password+'')

                    cy.visit('/')
                    cy.wait(globalValues.timer)
                    cy.log('\n --- go the backend and fill the form')
                    cy.log(' -- NewLogin function --')
                    cy.NewLogin(globalValues.wpAdmin, globalValues.timerNavigation, globalValues.username, globalValues.password)
                    
                    cy.log('\n --- I am in WP Backend!')
                    // cy.wait(globalValues.timer_hurray)
                    cy.wait(globalValues.timer)

            })





})

/*

cy.log(' -- WpBackUserLoginForm function --')

    // code goes here
    cy.log('username :: '+globalValues.username+'')
    cy.log('password :: '+globalValues.password+'')
    

    cy.visit('/')
    cy.wait(globalValues.timer)
    cy.log('\n --- go the backend')
    cy.visit(globalValues.wpAdmin)
    cy.wait(globalValues.timer)
    cy.log('\n --- fill the form')
    cy.get('#user_login' ).type(globalValues.username)
    cy.get('#user_pass' ).type(globalValues.password)
    cy.get('#wp-submit' ).click()
    cy.log('\n --- I am in WP Backend!')
    // cy.wait(globalValues.timer_hurray)
    cy.wait(globalValues.timer)


 */




