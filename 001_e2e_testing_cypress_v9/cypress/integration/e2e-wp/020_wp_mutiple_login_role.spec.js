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


020_wp_mutiple_login_role.spec.js
020_wp_mutiple_login_role.spec.js

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

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/020_wp_mutiple_login_role.spec.js"

- launch with a custom config
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_EN" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/020_wp_mutiple_login_role.spec.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="FR" --config-file "WP_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false


 */

const {globalValues} = require('../../support/allValuesVariables')



describe('020 :: WP :: HANDLING LOOP ::  ensure the minimum WP backend functioning @content @javascript :: Testing ' + globalValues.lang + ' (WpDebug) :: DEBUG @javascript @e2e @wp @required', function () {

    // Step_1
    before(function () {
        cy.log('--- WpDebug --- ')
        // cy.WpDebug()

    })

    

    // Step_2
    afterEach(function () {
        cy.log('--- Logout --- ')
        cy.WpLogout()
    })

    // Step_4
    after(function () {
        cy.log('--- WpEndingUpLight --- ')
        cy.WpEndingUpLight()

    })

    /* E2E SUITE */
    it('020_1 :: WP :: MUTIPLE LOGIN ROLE :: Superadmin :: Testing ' + globalValues.lang + ' :: MUTIPLE LOGIN ROLE (WpBackMutipleLoginRole)', function () {

            cy.WpBackMutipleLoginRole(globalValues.usernameSuperadmin, globalValues.passwordSuperadmin, 'Superadmin')
    
    })


    it('020_2 :: WP :: MUTIPLE LOGIN ROLE :: Administrator :: Testing ' + globalValues.lang + ' :: MUTIPLE LOGIN ROLE (WpBackMutipleLoginRole)', function () {

            cy.WpBackMutipleLoginRole(globalValues.usernameAdministrator, globalValues.passwordAdministrator, 'Administrator')
    })


    it('020_3 :: WP :: MUTIPLE LOGIN ROLE :: Editor :: Testing ' + globalValues.lang + ' :: MUTIPLE LOGIN ROLE (WpBackMutipleLoginRole)', function () {

            cy.WpBackMutipleLoginRole(globalValues.usernameEditor, globalValues.passwordEditor, 'Editor')
    })


    it('020_4 :: WP :: MUTIPLE LOGIN ROLE :: Author :: Testing ' + globalValues.lang + ' :: MUTIPLE LOGIN ROLE (WpBackMutipleLoginRole)', function () {

                cy.WpBackMutipleLoginRole(globalValues.usernameAuthor, globalValues.passwordAuthor, 'Author')
        })


    it('020_5 :: WP :: MUTIPLE LOGIN ROLE :: Contributor :: Testing ' + globalValues.lang + ' :: MUTIPLE LOGIN ROLE (WpBackMutipleLoginRole)', function () {

                cy.WpBackMutipleLoginRole(globalValues.usernameContributor, globalValues.passwordContributor, 'Contributor')
        })


    it('020_6 :: WP :: MUTIPLE LOGIN ROLE :: Subscriber :: Testing ' + globalValues.lang + ' :: MUTIPLE LOGIN ROLE (WpBackMutipleLoginRole)', function () {

                cy.WpBackMutipleLoginRole(globalValues.usernameSubscriber, globalValues.passwordSubscriber, 'Subscriber')
        })














    it.skip('END :: WP :: ensure the minimum WP functioning @end :: Testing ' + globalValues.LANGUAGE + '  :: END TESTING', function () {
        cy.WpEndTest()
    })


})

           



