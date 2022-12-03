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

003_wp_front_home_simple.cy.js

[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v10

[launch]
- launch the runner
npx cypress open
 */


describe('003_1 :: E2E-WP :: Check local WP homepage :: 003_wp_front_home_simple.cy.js ', function () {


    it('check the site-description on the WP HP', function () {
            cy.visit('/')
            cy.log('\n--- On HP')
            cy.get('body > div.wp-site-blocks > header > div.wp-container-7.wp-elements-6.wp-block-group.alignfull.has-background-color.has-foreground-background-color.has-text-color.has-background.has-link-color > header > div > div > div')
            
            .find('h1')
            .should(($p) => {
                expect($p).to.have.length(1)
                const className = $p[0].className
                expect(className).to.match(/wp-block-site-title/)
            })
            .then(($p) => {
                expect($p).to.have.text('yalla_wp')
            })
    })
})


describe('003_2 :: E2E-WP :: Check local WP homepage VERBOSE MODE :: 003_wp_front_home_simple.cy.js ', function () {
            it('check out the details on the WP HP', function () {
            cy.visit('/')
            cy.wait(3000)

            cy.log('Step_1 :: On HP')
            cy.title().should('eq', 'yalla_wp – Just another WordPress site')
            
        
            cy.log('Step_2 :: View More first post')
            cy.get('#wp--skip-link--target > ul > li.wp-block-post.post-224').click()

 
            cy.log('Step_3 :: check main nav')
            cy.get('body > div.wp-site-blocks > header > div.wp-container-7.wp-elements-6.wp-block-group.alignfull.has-background-color.has-foreground-background-color.has-text-color.has-background.has-link-color > header > div > div > nav').should('be.visible')
            

            cy.log('Step_4 :: check content main nav')
            cy.get('#modal-2-content > ul')
                .children('li')
                .should('have.length', 4)
                .should('contain.text', 'About')
                .should('contain', 'Another Page')
                .should('contain', 'Contact')
                .should('contain', 'Sample Page')
            
            cy.log('Step_5 :: check content main nav')
            cy.get('#wp--skip-link--target > ul > li.wp-block-post.post-224.post.type-post.status-publish.format-standard.hentry.category-python > div > h2').should('have.length', 1)
            
            cy.log('Step_6 :: check About')
            cy.get('#modal-2-content > ul > li:nth-child(1) > a').click()
            

            cy.log('Step_7 :: coming back on homepage by clicking on site title in H1')
            cy.get('body > div.wp-site-blocks > header > div > div > div > h1 > a').click()
            
            cy.log('Step_8 :: count post numbers on home :: more than 10')
            cy.get('#wp--skip-link--target > ul').should('have.length.gte', 1)
            
        })
});




describe('003_3 :: E2E-WP :: Check WP homepage :: 003_wp_front_home_simple.cy.js ', function () {

    it('check number of items on the WP HP', function () {
            cy.visit('/')

            var post = []
            cy.get('#wp--skip-link--target > ul > li.wp-block-post > div > h2')
            .each((post, index) => {
                // cy.log('post nb :: '+index+'')
                // cy.log('post title :: '+post.text()+'') 
                let post_title_length = post.text().length;
                cy.log('post_title_length :: '+post_title_length+'');

                // classname for each post title should be visible
                // cy.log('classname for each post title should be visible');
                cy.get('.wp-block-post-title').should('be.visible')
                
                // check size of the list contains 10 posts            
                // cy.log('check size of the list contains 10 posts');
                cy.get('.wp-block-post-title').should('have.length', 10)
                

            })

        
    })
            
});

