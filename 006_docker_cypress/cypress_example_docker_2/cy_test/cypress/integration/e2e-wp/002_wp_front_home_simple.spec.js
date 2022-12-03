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

002_wp_front_home_simple.spec.js

[path]
cd /Users/brunoflaven/Documents/01_work/cypress_book/e2e_testing_cypress_v9

[launch]
- launch the runner
npx cypress open

 */

describe('E2E-WP :: Check the local WP homepage :: 002_wp_front_home_simple.spec.js ', () => {
  it('successfully loads', () => {
    cy.visit('/')

      // way_1: you can write with single quotes
      cy.log('\n--- Hello I am on the WP\'s HP')

      // way_2: you can write with double quotes... up to you
      cy.log("\n--- Hello I am on the WP's HP")


  })
})








