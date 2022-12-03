/* ******************************************************************
* Some specific commands for UX navigation testing made with Cypress
****************************************************************** */

// add globalValues
const {globalValues} = require('../allValuesVariables')

// add userData
const {userData} = require('../allFakeUserData')


// import utility functions
import {
    // Class
    verifierValue,
    navigation,
    // Functions
    filePathImage,
    generateRandomNum,
    doRandomString,
    doDateString,
    doRandomTime
} from '../allUtils';

/* Source : 
https://docs.cypress.io/guides/references/assertions#BDD-Assertions 
*/
// cy.WpUxGuiTestingMainNavigation()
Cypress.Commands.add('WpUxGuiTestingMainNavigation', () => {
    cy.log(' -- WpUxGuiTestingMainNavigation function --')

    cy.log('verifierValue :: '+verifierValue+'');

    // WpMainNavLabel
    // cy.log('navigation.WpMainNavLabel :: '+navigation.WpMainNavLabel+'');
    // cy.log('navigation.WpMainNavLabel.length :: '+navigation.WpMainNavLabel.length+'');
    // cy.log('navigation.WpMainNavLabel[1] :: '+navigation.WpMainNavLabel[1]+'');


    // WpMainNavCssSelector
    // cy.log('navigation.WpMainNavCssSelector :: '+navigation.WpMainNavCssSelector+'');
    // cy.log('navigation.WpMainNavCssSelector.length :: '+navigation.WpMainNavCssSelector.length+'');
    // cy.log('navigation.WpMainNavCssSelector[1] :: '+navigation.WpMainNavCssSelector[1]+'');

            cy.log('\n --- TESTING CASE_1 ')

            cy.log('navigation.WpMainNavLabel.length :: '+navigation.WpMainNavLabel.length+'')
            // init
            let i = 0
            for (i; i < (navigation.WpMainNavLabel.length); i++) {
                cy.log('--- link_' + i + ' :: '+navigation.WpMainNavLabel[i]+'')
                
                // cy.log('navigation.WpMainNavLabel['+i+'] :: '+navigation.WpMainNavLabel[i]+'')
                // cy.log('navigation.WpMainNavCssSelector['+i+'] :: '+navigation.WpMainNavCssSelector[i]+'')

                cy.get(''+navigation.WpMainNavCssSelector[i]+'').should('exist')
                cy.get(''+navigation.WpMainNavCssSelector[i]+'').should('be.visible')


                cy.get(''+navigation.WpMainNavCssSelector[i]+'', {timeout: 15000}).invoke('text').then((text) => {

                                    // cy.log(''+text+'')
                                    // cy.log(''+text.length+'')
                                    expect(''+text+'').to.be.a('string')
                                    expect(text.length).to.be.at.least(3)
                                    

                })


                cy.log('\n --- TESTING CASE_2 ')
                cy.request(''+navigation.WpMainNavCssSelector[i]+'').then((response) => {
                            expect(response.status).to.eq(200)
                        })

                cy.log('\n --- TESTING CASE_3 ')
                cy.get(''+navigation.WpMainNavCssSelector[i]+'', {timeout: 10000}).click({force: true})

          
                }//EOL

  cy.log('\n --- TESTING CASE_4 ')
  const grabbedList = []
  // cy.log('grabList')
  cy.get('#adminmenuwrap > #adminmenu > li > a').each((li) => {
      // let's not even parse anything
      // cy.log(''+li.text()+'')
      grabbedList.push(''+li.text()+'')
      // cy.log(''+grabbedList+'')
    })
    // yield the grabbed list using either wrap or then
    .then(() => {
        // cy.log(''+grabbedList+'')

        let length_m = grabbedList.length
        let m = 0
            for (m = 0 ; m < length_m ; m++) {
                // cy.log(''+m+'')         
                expect(''+grabbedList[m]+'').to.deep.equal(''+navigation.WpMainNavLabel[m]+'')
                expect(''+grabbedList[m]+'').to.have.string(''+navigation.WpMainNavLabel[m]+'')
                expect(''+grabbedList[m]+'').to.include(''+navigation.WpMainNavLabel[m]+'') 
            }
    })

                
});


// cy.WpUxGuiTestingSubNav()
Cypress.Commands.add('WpUxGuiTestingSubNav', () => {

       cy.log(' -- WpUxGuiTestingSubNav functions --')

});






