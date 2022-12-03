/// <reference types="cypress" />
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
 * POM or Page Objects in Cypress with TypeScript
 * Hows to implement Page Objects in Cypress
 * See 003_NewWpFrontendHomePageSearch.ts for test
 **/
// WpFrontSearchHomepage.ts
export class WpFrontSearchHomepage{


   // 2. Enter your search term
    searchTextBox = () => {
        return cy.get('#search-2 > form > label > input')   
    }
   
   // 3. Click on the Search button
    searchButton = () =>  {
        return cy.get('#search-2 > form > button') 
    }
   
   searchResults(){
        return cy.get('h1').first();
    }

}
