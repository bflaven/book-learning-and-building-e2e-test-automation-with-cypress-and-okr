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


002_TestWpFrontendHomePageSearch.cy.js


[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10

[LAUNCH]
- launch the runner
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false
npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false



- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/pom-wp/002_wp_pom.cy.js"

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

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/pom-wp/002_wp_pom.cy.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="FR" --config-file "WP_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false



 */

const {globalValues} = require('../../support/allValuesVariables')

// Do  not forget to import the elements
// import { HomePage } from '../../../pageobjects/WpHomePageSearch.js'
import { WpFrontendHomePageSearch } from '../../../pageobjects/WpFrontendHomePageSearch.js'



    // Step_1
    before(function () {
        cy.log('--- WpDebug --- ')
        // cy.WpDebug()

    })

// NOTE_1 :: I have intentionally given a longer name to the variable, in this case a constant, so I can differentiate easiliy from the Class instantiation.


// NOTE_2 :: I create a new instance of the Class ouside the test above describe() or not in it() so the constant homePageAndSearch can exist in the scope of the all test.

    
describe('002 :: WP :: POM CONCEPT ::  ensure the minimum WP backend functioning @homepage @search :: Testing ' + globalValues.lang + ' :: VISIT HOMEPAGE, CHECK SEARCH RESULT', function () {



        it('002_1 :: WP :: POM CONCEPT :: VISIT HOMEPAGE, CHECK SEARCH RESULT ', function () {
                    
                    cy.log(' -- NewSearch function --')
                    cy.NewSearch('CMS')
                    // 3 ways to test the same thing on GUI
                    cy.get('#main > header > h1 > span:contains("CMS")', {timeout: 10000})
                    cy.get('#main > header > h1 > span', {timeout: 10000}).should('contain', 'CMS')
                    cy.get('#main > header > h1 > span', {timeout: 10000}).should('have.text', 'CMS')

                   })





})












