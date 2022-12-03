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


001_wp_apiTesting.spec.js


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

npx cypress run --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/019_wp_handling_loop.spec.js"

- launch with a custom config
npx cypress open --env LANG="en_EN" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="en_ENN" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="es_ES" --config-file "es_ES.conf.env.json" --config video=false,screenshotOnRunFailure=false


- launch the script only with no video and no screenshots

npx cypress run --env LANG="en_EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false --spec "cypress/integration/e2e-wp/019_wp_handling_loop.spec.js"




#a combinaison of --env with a custom env file
npx cypress open --env LANG="EN",port=4222,name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false


npx cypress open --env name="Bruno",project="MySuite_2e2"  --config-file "WP_EN.conf.env.json" --config video=false,screenshotOnRunFailure=false

npx cypress open --env LANG="FR" --config-file "WP_FR.conf.env.json" --config video=false,screenshotOnRunFailure=false


 */

let urlApiAllPosts='https://cypress.mydomain.priv/wordpress/wp-json/wp/v2/posts/';
let urlApi='https://cypress.mydomain.priv/wordpress/wp-json/wp/v2/posts/28';
let urlApiSearch='https://cypress.mydomain.priv/wordpress/wp-json/wp/v2/posts?search=';

/*
Examples to query the search engine
Be sure to have some results avaible for the search...
https://cypress.mydomain.priv/wordpress/wp-json/wp/v2/search/?query=New Post Number 13
https://cypress.mydomain.priv/wordpress/wp-json/wp/v2/posts?search=ludwig
https://cypress.mydomain.priv/wordpress/wp-json/wp/v2/posts?search=cypress

*/
describe('Example to demonstrate API Chaining in Cypress', function () {

        it('Chain two API requests and validate the response', () => {
          
            cy.request({
                method: 'GET',
                url: ''+urlApi+'',
            }).then((response) => {
                const titlePost = response.body.title.rendered
                return titlePost 
                // cy.log(titlePost)               
            })

                .then((titlePost) => {
                    cy.request({
                        method: 'GET',
                        url: ''+urlApiSearch+''+titlePost
                    }).then((response) => {
                        expect(response.status).to.eq(200)

                        // cy.log(response.body[0].id)
                        // cy.log(response.body[0].title.rendered)

                        expect(response.body[0].title).to.not.equal(null);
                        expect(response.body[0].title).to.have.property('rendered', titlePost)
                        expect(response.body[0].id).to.be.a('number');
                        // expect(response.body[0].id).to.equal(28);
                        assert.isNumber(response.body[0].id);
                        
                        
                    })
                })
                
        })
    })
           



