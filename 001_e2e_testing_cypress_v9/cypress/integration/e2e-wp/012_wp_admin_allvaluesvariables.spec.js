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


012_wp_admin_allvaluesvariables.spec.js

[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[LAUNCH]
- launch the runner
npx cypress open


- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/012_wp_admin_allvaluesvariables.spec.js"

- launch with a custom config
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/012_wp_admin_allvaluesvariables.spec.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


 */

const {globalValues} = require('../../support/allValuesVariables')


describe('012 :: E2E-WP :: '+globalValues.lang+' :: Check local WP backend :: VARIABLES ', function () {

    it('012_1 :: Check the env variables before accessing to WP backend', function () {
            cy.visit('/')


            // global variables from cypress.json
            cy.log('-- literal from the globalValues coming from ../../support/allValuesVariables --')

            cy.log('username :: '+globalValues.username+'')
            cy.log('username :: '+globalValues.username+'')
            cy.log('url :: '+globalValues.url+'')
            cy.log('baseURL :: '+globalValues.baseURL+'')


            cy.log('TOTEM_TEST_MAN :: '+globalValues.TOTEM_TEST_MAN+'')
            cy.log('strLength :: '+globalValues.strLength+'')
            cy.log('contentArticleInputTitle :: '+globalValues.contentArticleInputTitle+'')

            // V2
            // cy.WpBackUserLoginForm('admin','admin')
            // cy.WpBackUserLoginForm('bruno','admin12345')
            // cy.WpBackUserLoginForm(globalValues.username, globalValues.username)
                        

          })

})

describe('012_2 :: E2E-WP :: Check local WP backend :: LOGIN ', function () {

       it ('012_2_1 :: Login to WP with your Credentials', () => {

            // V3
            cy.WpBackUserLoginForm()
        
    })

})

