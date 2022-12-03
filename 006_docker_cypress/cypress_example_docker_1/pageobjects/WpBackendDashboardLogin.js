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
 * See 001_TestWpBackendDashboardLogin.spec.js for test
 **/

// WpBackendDashboardLogin.js
export class WpBackendDashboardLogin {


    // 1. Go to the login page
    navigate = (url) =>   {
                cy.visit(url) 
    }

    // 2. Enter your Username or Email Address
    usernameInput() {
        return cy.get('#user_login')
    }

    // 3. Enter your Password
    passwordInput() {
        return cy.get('#user_pass')
    }

    // 4. Click on the Login button
    loginBtn() {
        return cy.get('#wp-submit')
    }

    // Perform the login
    performLogin = (url, timer, username, password) =>  {        
        this.navigate(url)
        cy.wait(timer)
        this.usernameInput().type(username)
        this.passwordInput().type(password)
        this.loginBtn().click()
    
    }




}// EOC


//Instantiate Class WpBackendDashboardLogin
const BackendDashboardLogin = new WpBackendDashboardLogin();

// Create Custom Command with the constant BackendDashboardLogin
// cy.NewLogin(username, password)
Cypress.Commands.add('NewLogin', (url, timer, username, password) => {
    BackendDashboardLogin.performLogin(url, timer, username, password)
})


/*
 * SYNTAX
 * Another to write the function or methods in the Class
 **/

// V1
/*
    
    // 1. Go to the login page
    navigate = (url) => cy.visit(url)

    // 2. Enter your Username or Email Address
    usernameInput = () => cy.get('#user_login')
   

    // 3. Enter your Password
    passwordInput = () => cy.get('#user_pass')
   

    // 4. Click on the Login button
    loginBtn = () => cy.get('#wp-submit')
  

    // Perform the login
    performLogin = (url, timer, username, password) =>  {        
        this.navigate(url)
        cy.wait(timer)
        this.usernameInput().type(username)
        this.passwordInput().type(password)
        this.loginBtn().click()
    
    }
    */
   

/*
* MODEL
* Took the WpBackUserLoginForm as model, just isolate the login form and add all the cypress command into the test.
* 
 */
/*
 

    cy.log(' -- WpBackUserLoginForm function --')

    // code goes here
    cy.log('username :: '+globalValues.username+'')
    cy.log('password :: '+globalValues.password+'')
    

    cy.visit('/')
    cy.wait(globalValues.timer)
    cy.log('\n --- go the backend')
    cy.visit(globalValues.wpAdmin)
    cy.wait(globalValues.timer)
    cy.log('\n --- fill the form')
    cy.get('#user_login' ).type(globalValues.username)
    cy.get('#user_pass' ).type(globalValues.password)
    cy.get('#wp-submit' ).click()
    cy.log('\n --- I am in WP Backend!')
    // cy.wait(globalValues.timer_hurray)
    cy.wait(globalValues.timer)

 */







