/// <reference types="cypress" />

/**
 * Type definition for the Cypress commands. 
 * if you are using VS code, it enables some JScode explanation so
 * You are getting jsdoc and intellisense worrking together
 * with custom cypress commands
 * Do declare it in the file commands.ts with
 * /// <reference path="./commands.d.ts" /> on top
 * @author Bruno Flaven
 * @since 31/17/2022
 */

  declare namespace Cypress {
   interface Chainable {

            // See support/ commands/addPost.ts
            /**
            * create new post in WP
            * leverage on custom command if needed
            * @example cy.addPost()
            */
            addPost (input): Chainable<Window>


            // See support/ commands/updateApi.ts

            /**
            * create new something via API
            * @example cy.addNewApi(title, item, listIndex)
            */
            addNewApi(options: {
            title: string;
            boardIndex?: number;
            listIndex?: number;
            }): Chainable<Element>

            

            /**
            * updates a board via API
            * @example cy.updateBoardApi(name, id)
            */

            addNewApi(options: {
            name: string;
            id?: number;
            }): Chainable<Element>
            
            
            // Check commands.ts
            /**
            * Show TOTEM_TEST_MAN at the end of the test.
            * The message is always defined.
            * @example cy.WpEndTest()
            */
            WpEndTest (): Chainable<Window>

            /**
            * Custom msg in log
            * @example cy.logMe('hello')
            */
            logMe (msg): Chainable<Window>

            /**
            * Custom command to visit Duckduckgo page
            * @example cy.getDuckduckgo()
            */
            getDuckduckgo (): Chainable<Window>

            /**
            * Custom command to show something
            * @example cy.dataCy('Prisca')
            */
            dataCy (): Chainable<Window>

            /**
            * updates a board via API
            * @example cy.LogUser(username, password)
            */

            LogUser(username, password: {
            username: string;
            password: string;
            }): Chainable<Element>


            // For the e2e-advanced-typescript-wp examples
            
            
            
            /**
            * Testing the login to wp with a Class
            * @example cy.NewLogin(globalValues.wpAdmin, globalValues.timerNavigation, globalValues.username, globalValues.password)
            */

            NewLogin(username, password: {
            username: string;
            password: string;
            }): Chainable<Element>

            // 

            /**
            * Testing the search on the WP HP with a Class
            * @example cy.NewSearch('CMS')
            */

            NewSearch(searchTerm: {
            searchTerm: string;
            }): Chainable<Element>


   }
}
