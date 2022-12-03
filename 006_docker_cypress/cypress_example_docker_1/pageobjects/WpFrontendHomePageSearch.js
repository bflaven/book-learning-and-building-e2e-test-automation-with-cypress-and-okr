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
 * POM or Page Objects in Cypress
 * Hows to implement Page Objects in Cypress
 * See 002_TestWpFrontendHomePageSearch.spec.js for test
 **/

// WpFrontendHomePageSearch.js
export class WpFrontendHomePageSearch {

    // V2

    // 1. Go to the homepage
    navigate = () => {
        return cy.visit("/")
    }

    // 2. Enter your search term
    searchTextBox = () => {
        return cy.get('#search-2 > form > label > input')   
    }

    // 3. Click on the Search button
    searchButton = () =>  {
        return cy.get('#search-2 > form > button') 
    }

    // Just for debug log the search term
    searchTermLog = (search) =>  {
        return cy.log('search for :: '+search) 
    }

    // Perform the search 
    performSearch = (searchTerm) =>  {
        this.navigate()
        this.searchTermLog(searchTerm)
        this.searchTextBox().type(searchTerm)
        this.searchButton().click() 
    }
    
}//EOC



//Instantiate Class WpFrontendHomePageSearch
const FrontendHomePageSearch = new WpFrontendHomePageSearch();

// Create Custom Command with the constant FrontendHomePageSearch
// cy.NewSearch(searchTerm)
Cypress.Commands.add('NewSearch', (searchTerm) => {
    FrontendHomePageSearch.performSearch(searchTerm)
})





/*
 * SYNTAX
 * Another to write the function or methods in the Class
 **/

// V1
/*
    
    // 1. Go to the homepage
    navigate = () => cy.visit("https://cypress.mydomain.priv/wordpress/")
    
    // 2. Enter your search term
    searchTextBox = () => cy.get('#search-2 > form > label > input')
    
    // 3. Click on the Search button
    searchButton = () => cy.get('#search-2 > form > button')

    // Just for debug log the search term
    searchTermLog = (search) => cy.log('search for :: '+search) 

    // Perform the search
    performSearch = (searchTerm) => {
        this.searchTermLog(searchTerm)
        this.searchTextBox().type(searchTerm)
        this.searchButton().click()
    }
*/
   




