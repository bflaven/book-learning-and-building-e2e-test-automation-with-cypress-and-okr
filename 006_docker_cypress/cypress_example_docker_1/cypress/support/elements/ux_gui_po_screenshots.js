/* ******************************************************************
* Browse the app to make screenshots Some specific commands for UX 
* navigation testing made with Cypress
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

// cy.MakeScreenshotGreatAgain
Cypress.Commands.add('MakeScreenshotGreatAgain', (fileName) => {

        let ScreenshotDate = new Date();
        let monthPic = parseInt(ScreenshotDate.getMonth()+1);
        let dayPic = ScreenshotDate.getDate();
        let yearPic = ScreenshotDate.getFullYear();


        let ScreenshotFilename = (""+dayPic+"_"+monthPic+"_"+yearPic+"");
        
        cy.log('\n--- ScreenshotFilename :: '+fileName+'_'+ScreenshotFilename+'_'+generateRandomNum(5)+'')
        // Capture
        cy.screenshot(''+fileName+'_'+ScreenshotFilename+'_'+generateRandomNum(5)+'')
});



// cy.WpUxGuiTestingMainNavigationScreenshots()
Cypress.Commands.add('WpUxGuiTestingMainNavigationScreenshots', () => {
    cy.log(' -- WpUxGuiTestingMainNavigationScreenshots function --')

            cy.log('verifierValue :: '+verifierValue+'');
            cy.log('\n --- SCREENSHOTS ')

            cy.log('navigation.WpMainNavLabel.length :: '+navigation.WpMainNavLabel.length+'')
            // init
            let i = 0
            for (i; i < (navigation.WpMainNavLabel.length); i++) {
                cy.log('--- link_' + i + ' :: '+navigation.WpMainNavLabel[i]+'')
                cy.get(''+navigation.WpMainNavCssSelector[i]+'').should('exist')
                cy.get(''+navigation.WpMainNavCssSelector[i]+'').should('be.visible')
                cy.request(''+navigation.WpMainNavCssSelector[i]+'').then((response) => {
                            expect(response.status).to.eq(200)
                        })
                
                cy.get(''+navigation.WpMainNavCssSelector[i]+'', {timeout: 10000}).click({force: true})
                
                // Make the screenshot for each GUI visited in WP backend
                cy.MakeScreenshotGreatAgain(''+globalValues.lang+'_'+i+'_'+navigation.WpMainNavLabel[i]+'_'+'WpUxGuiTestingMainNavigationScreenshots')


            }//EOL


                
});


// cy.WpUxGuiTestingSubNavScreenshots()
Cypress.Commands.add('WpUxGuiTestingSubNavScreenshots', () => {

       cy.log(' -- WpUxGuiTestingSubNavScreenshots functions --')

});






