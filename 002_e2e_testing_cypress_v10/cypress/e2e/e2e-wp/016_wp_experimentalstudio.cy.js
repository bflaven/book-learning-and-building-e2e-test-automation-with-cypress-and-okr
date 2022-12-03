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


016_wp_experimentalstudio.cy.js


[PATH]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10

[LAUNCH]
- launch the runner
npx cypress open --env LANG="EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config video=false,screenshotOnRunFailure=false



- launch the entire suite with default global cypress config settings
npx cypress run

- launch the script only with no video and no screenshots
npx cypress run --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/016_wp_fixtures_mysql.cy.js"

- launch with a custom config
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_EN" --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/016_wp_fixtures_mysql.cy.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "en_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


 */

describe('WP local login - Example to Demonstrate Cypress Studio', () => {
        it('Extend Test via Cypress Studio', () => {
                    cy.visit('/wp-login.php')
                    /* ==== Generated with Cypress Studio ==== */
                    cy.get('#user_login').clear();
                    cy.get('#user_login').type('admin');
                    cy.get('#user_pass').clear();
                    cy.get('#user_pass').type('admin');
                    cy.get('#wp-submit').click();
                    cy.get('#wp-admin-bar-logout > .ab-item').click({force: true});
                    /* ==== End Cypress Studio ==== */
        })
        
    })


            /* ==== Generated with Cypress Studio ==== */
/*

            cy.get('#user_login').clear();
            cy.get('#user_login').type('admin');
            cy.get('#user_pass').clear();
            cy.get('#user_pass').type('admin');
            cy.get('#wp-submit').click();
            cy.get('#wpadminbar').click();
            cy.get('#wp-admin-bar-my-account > [aria-haspopup="true"]').should('be.visible');
            cy.get('#wpadminbar').click();
            cy.get('#wp-admin-bar-logout > .ab-item').should('have.text', 'Log Out');
*/

            /* ==== End Cypress Studio ==== */







