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


001_wp_front_home_simple_typescript.spec.ts


[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_typescript_v9/

[launch]
- launch the runner
npx cypress open

- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/009_wp_admin_login_failed.spec.js"



 */

describe('001 :: E2E-WP :: Check local WP backend :: VARIABLES ', function () {

    it('001_1 :: Check the env variables before accessing to WP backend', function () {
            cy.visit('/')
  })


    
  it('001_2 :: Load a custom command in typescript', () => {
        cy.log('\n --- custom command in typescript')
        cy.WpEndTest()

      })

})