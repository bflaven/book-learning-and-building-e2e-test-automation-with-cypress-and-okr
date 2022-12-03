/************************************************
*   This example commands.js shows you how to
*    create various custom commands and overwrite
*    existing commands.
*    For more comprehensive examples of custom
*    commands please read more here:
*    https://on.cypress.io/custom-commands
************************************************
*/
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// 



// add globalValues
const {globalValues} = require('./allValuesVariables')

// add userData
const {userData} = require('./allFakeUserData')


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
} from './allUtils';

// CAUTION specific files for content type or feature e.g article, edition, cropper... etc
// Split commands.js in small files
import { WpUxGuiTestingMainNavigation, WpUxGuiTestingSubNav } from './elements/ux_gui_navigation';

import { MakeScreenshotGreatAgain, WpUxGuiTestingMainNavigationScreenshots, WpUxGuiTestingSubNavScreenshots } from './elements/ux_gui_po_screenshots';



/* V1 */
// cy.WpBackUserLoginForm()
/*
Cypress.Commands.add('WpBackUserLoginForm', (username, password) => {

    cy.log(' -- WpBackUserLoginForm function --')

	// code goes here
  	cy.log('username :: '+username+'')
  	cy.log('password :: '+password+'')

    cy.log('' + globalValues.TOTEM_TEST_MAN + '')
    cy.log('' + globalValues.baseURL + '')
});
*/

/* V2 */
// cy.WpBackUserLoginForm()
/*
Cypress.Commands.add('WpBackUserLoginForm', () => {

    cy.log(' -- WpBackUserLoginForm function --')

  // code goes here
    cy.log('username :: '+globalValues.username+'')
    cy.log('password :: '+globalValues.password+'')

    cy.log(''+globalValues.TOTEM_TEST_MAN+'')
    cy.log(''+globalValues.baseURL+'')

});
*/

/* V3 */
// cy.WpBackUserLoginForm()

Cypress.Commands.add('WpBackUserLoginForm', () => {

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
    // cy.get('#user_pass' ).type(globalValues.password)
    cy.get('#user_pass' ).type(globalValues.password, { log: false })
	cy.get('#wp-submit' ).click()
	cy.log('\n --- I am in WP Backend!')
	// cy.wait(globalValues.timer_hurray)
    cy.wait(globalValues.timer)

});


/*

cy.log('\n --- go the hp')
        cy.visit('/')
        cy.wait(timer)
        cy.log('\n --- go the backend')

        // Way_1
        // cy.visit(''+baseURL+loginPage+'')
        // cy.visit(''+baseURL+''+loginPage+'')
        // cy.visit(''+loginPage+'')
        // cy.visit(loginPage)

        // Way_2
        // Normally WordPress will redirect you to the login form
        // cy.visit(''+baseURL+wpAdmin+'')
        // cy.visit(''+baseURL+''+wpAdmin+'')
        // cy.visit(''+wpAdmin+'')
        cy.visit(wpAdmin)
        cy.wait(timer)


        cy.log('\n --- fill the form')

        // Way_3
        cy.get('#user_login' ).type(username)
        cy.get('#user_pass' ).type(password)

        cy.get('#wp-submit' ).click()
        cy.log('\n --- I am in WP Backend!')
        cy.wait(timer_hurray)

 */


// cy.WpDebug()
Cypress.Commands.add('WpDebug', () => {
    cy.log(' -- WpDebug function --')

    // global variables from cypress.json
    cy.log('-- literal from the globalValues coming from ../../support/allValuesVariables --')

    cy.log('username :: '+globalValues.username+'')
    cy.log('username :: '+globalValues.username+'')
    cy.log('url :: '+globalValues.url+'')
    cy.log('baseURL :: '+globalValues.baseURL+'')


    cy.log('TOTEM_TEST_MAN :: '+globalValues.TOTEM_TEST_MAN+'')
    cy.log('strLength :: '+globalValues.strLength+'')
    cy.log('contentArticleInputTitle :: '+globalValues.contentArticleInputTitle+'')

    
     
});

// cy.WpLoginFormAdvanced()
Cypress.Commands.add('WpLoginFormAdvanced', () => {
    cy.log(' -- WpLoginFormAdvanced function --')

    cy.visit('/')
    // cy.wait(globalValues.timer)
    cy.log('\n --- go the backend')
    cy.visit(globalValues.wpAdmin)
    // cy.wait(globalValues.timer)
    cy.log('\n --- fill the form')
    cy.get('#user_login' ).type(globalValues.username)
    cy.get('#user_pass' ).type(globalValues.password)
    cy.get('#wp-submit' ).click()
    cy.log('\n --- I am in WP Backend!')

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq(globalValues.wpAdminFull)
        expect(loc.protocol).to.eq(globalValues.wpAdminFullProtocol)
        expect(loc.host).to.eq(globalValues.domain)
        expect(loc.hostname).to.eq(globalValues.domain)
    })
    // cy.wait(globalValues.timerNavigation)
    
     
});


// cy.WpLogout()
Cypress.Commands.add('WpLogout', () => {
    cy.log(' -- WpLogout function --')

    // body
    cy.get('#wp-admin-bar-logout > a', {timeout: 10000}).click({force: true})
     
});

// cy.WpEndingUpLight()
Cypress.Commands.add('WpEndingUpLight', () => {
    cy.log(' -- WpEndingUpLight function --')
    cy.log('' + globalValues.TOTEM_TEST_MAN_CYPRESS + '')
    
     
});

// cy.WpEndTest()
Cypress.Commands.add('WpEndTest', () => {
    cy.log(' -- WpEndTest function --')
    cy.log('' + globalValues.TOTEM_TEST_MAN + '')     
});

// cy.WpFakeForLogic()
Cypress.Commands.add('WpFakeForLogic', (label) => {
    cy.log(' -- WpFakeForLogic function --')
    cy.log('' +label+ '')     
});


// cy.WpPostCreateDraft()
Cypress.Commands.add('WpPostCreateDraft', () => {
    cy.log(' -- WpPostCreateDraft function --')
    
    // Visit create post form
    cy.log (''+globalValues.wpAdmin+''+globalValues.postNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.postNewCreatePath+'')
    // cy.wait(globalValues.timerNavigation)

    // Add content
    cy.get('#title', {timeout: 10000}).type(''+globalValues.contentArticleInputTitle+' '+globalValues.RandomString+' '+globalValues.startDateString+'')


    // Remove WYSIWYG rich editor
    cy.get('#content', {timeout: 10000}).click({force: true})
    cy.get('#content', {timeout: 10000}).type(''+globalValues.contentPageInputBody+'')
    // Put back WYSIWYG rich editor
    cy.get('#content', {timeout: 10000}).click({force: true})


    // Add Tags
    cy.log('\n--- Add Tags for the Post')

    /* V1 */
    /*
    cy.get('#new-tag-post_tag', {timeout: 10000}).type(''+globalValues.RandomString+'{enter}')
    cy.get('#new-tag-post_tag', {timeout: 10000}).type('Cypress{enter}')
    cy.get('#new-tag-post_tag', {timeout: 10000}).type('Automation{enter}')
    cy.get('#new-tag-post_tag', {timeout: 10000}).type('Beautiful Soup{enter}')
    */

    /* V2 */
    // cy.log(''+globalValues.tagsPost+'')
    // cy.log(''+globalValues.tagsPost.length+'')

    let k = 0
    for (k = 0; k < globalValues.tagsPost.length; k++) {
       
        cy.log('--- Insert tag '+k+' ')
        cy.get('#new-tag-post_tag', {timeout: 10000}).type(''+globalValues.tagsPost[k]+'{enter}')
        // cy.wait(globalValues.contentTimerDraft)

    }//EOL
    // cy.wait(globalValues.timerNavigation)
    
    // Add categories
    
    /* V1 */
    /*
    cy.get('#in-category-3', {timeout: 10000}).click({force: true})
    cy.get('#in-category-104', {timeout: 10000}).click({force: true})
    cy.get('#in-category-108', {timeout: 10000}).click({force: true})
    cy.get('#in-category-111', {timeout: 10000}).click({force: true})
    cy.get('#in-category-165', {timeout: 10000}).click({force: true})
    cy.wait(globalValues.timerNavigation)
    */

    // cy.log(''+globalValues.categoriesPost+'')
    // cy.log(''+globalValues.categoriesPost.length+'')
    let c = 0
    for (c = 0; c < globalValues.categoriesPost.length; c++) {
       
        cy.log('--- Insert category '+c+'')
        cy.get('#in-category-'+globalValues.categoriesPost[c]+'', {timeout: 10000}).click({force: true})
        // cy.wait(globalValues.contentTimerDraft)

    }//EOL
    // cy.wait(globalValues.timerNavigation)


    // Save the post
    cy.get('#save-post', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)

    cy.reload()
    // cy.wait(globalValues.timerNavigation)

    // Check save using cypress
    cy.get('#title', {timeout: 10000}).should('have.value', ''+globalValues.contentArticleInputTitle+' '+globalValues.RandomString+' '+globalValues.startDateString+'')
 
     
});


// cy.WpPageCreateDraft()
Cypress.Commands.add('WpPageCreateDraft', () => {
    cy.log(' -- WpPageCreateDraft function --')
    
    
    // Visit create post form
    cy.log (''+globalValues.wpAdmin+''+globalValues.pageNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.pageNewCreatePath+'')
    // cy.wait(globalValues.timerNavigation)


    // Add content
    cy.get('#title', {timeout: 10000}).type(''+globalValues.contentPageInputTitle+' '+globalValues.RandomString+' '+globalValues.startDateString+'')


    // Remove WYSIWYG rich editor
    cy.get('#content', {timeout: 10000}).click({force: true})
    cy.get('#content', {timeout: 10000}).type(''+globalValues.contentPageInputBody+'')
    // Put back WYSIWYG rich editor
    cy.get('#content', {timeout: 10000}).click({force: true})

    // Save the post
    cy.get('#save-post', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)

    cy.reload()
    // cy.wait(globalValues.timerNavigation)

    // Check save using cypress
    cy.get('#title', {timeout: 10000}).should('have.value', ''+globalValues.contentPageInputTitle+' '+globalValues.RandomString+' '+globalValues.startDateString+'')

});

// cy.WpPostTagCreate()
Cypress.Commands.add('WpPostTagCreate', () => {
    cy.log(' -- WpPostTagCreate function --')

    // Visit create post tag form
    cy.log (''+globalValues.wpAdmin+''+globalValues.postTagNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.postTagNewCreatePath+'')
    // cy.wait(globalValues.timerNavigation)
    
    // Add tag
    cy.get('#tag-name', {timeout: 10000}).type(''+globalValues.postTagInputName+' '+globalValues.RandomString+'')


    // Add tag description
    cy.get('#tag-description', {timeout: 10000}).type(''+globalValues.postTagInputDescription+' '+globalValues.RandomString+'')

    // Save the tag
    cy.get('#submit', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)

    cy.reload()
    // cy.wait(globalValues.timerNavigation)

    // Check save using cypress
    cy.get('#tag-search-input', {timeout: 10000}).type(''+globalValues.postTagInputName+' '+globalValues.RandomString+'')
    cy.get('#search-submit', {timeout: 10000}).click({force: true})
    
    // cy.get('#the-list > tr > td.name.column-name.has-row-actions.column-primary', {timeout: 10000}).should('have.length', 1)

    cy.get('#the-list > tr > td.name.column-name.has-row-actions.column-primary').should('include.text', ''+globalValues.postTagInputName+' '+globalValues.RandomString+'')
    

});

// cy.WpPostCategoryCreate()
Cypress.Commands.add('WpPostCategoryCreate', () => {
    cy.log(' -- WpPostCategoryCreate function --')

    // Visit create category form
    cy.log (''+globalValues.wpAdmin+''+globalValues.postCategoryNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.postCategoryNewCreatePath+'')
    // cy.wait(globalValues.timerNavigation)
    
    // Add tag
    cy.get('#tag-name', {timeout: 10000}).type(''+globalValues.postCategoryInputName+' '+globalValues.RandomString+'')


    // Add tag description
    cy.get('#tag-description', {timeout: 10000}).type(''+globalValues.postCategoryInputDescription+' '+globalValues.RandomString+'')

    // Save the tag
    cy.get('#submit', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)

    cy.reload()
    // cy.wait(globalValues.timerNavigation)

    // Check save using cypress
    cy.get('#tag-search-input', {timeout: 10000}).type(''+globalValues.postCategoryInputName+' '+globalValues.RandomString+'')
    cy.get('#search-submit', {timeout: 10000}).click({force: true})    
    
    // cy.get('#the-list > tr > td.name.column-name.has-row-actions.column-primary', {timeout: 10000}).should('have.length', 1)
    
    cy.get('#the-list > tr > td.name.column-name.has-row-actions.column-primary').should('include.text', ''+globalValues.postTagInputName+' '+globalValues.RandomString+'')

    
});


// cy.WpUserCreate()
Cypress.Commands.add('WpUserCreate', () => {
    cy.log(' -- WpUserCreate function --')

    /*
    cy.log(' -- userData.randomUsername :: '+userData.randomUsername+' --')
    cy.log(' -- userData.randomFirstName :: '+userData.randomFirstName+' --')
    cy.log(' -- userData.randomLastName :: '+userData.randomLastName+' --')
    cy.log(' -- userData.randomEmail :: '+userData.randomEmail+' --')
    cy.log(' -- userData.randomPassword :: '+userData.randomPassword+' --')
    cy.log(' -- userData.randomWebsite :: '+userData.randomWebsite+' --')
    */

    // Visit create category form
    cy.log (''+globalValues.wpAdmin+''+globalValues.userNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.userNewCreatePath+'')
    cy.wait(globalValues.timerNavigation)
    
    // Add user_login
    cy.get('#user_login', {timeout: 10000}).type(''+userData.randomUsername+'')

    // Add email
    cy.get('#email', {timeout: 10000}).type(''+userData.randomEmail+'')

    // Add first_name
    cy.get('#first_name', {timeout: 10000}).type(''+userData.randomFirstName+'')

    // Add last_name
    cy.get('#last_name', {timeout: 10000}).type(''+userData.randomLastName+'')

    // Add url
    cy.get('#url', {timeout: 10000}).type(''+userData.randomWebsite+'')
    
    // Add password (pass1)
    cy.get('#pass1', {timeout: 10000}).clear()    
    cy.get('#pass1', {timeout: 10000}).type(''+userData.randomPassword+'')


    // Save the user
    cy.get('#createusersub', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)
    
    cy.reload()
    // cy.wait(globalValues.timerNavigation)

    // Check save using cypress
    cy.get('#user-search-input', {timeout: 10000}).type(''+userData.randomUsername+'')
    cy.get('#search-submit', {timeout: 10000}).click({force: true})
    cy.get('#the-list > tr > td.username.column-username.has-row-actions.column-primary > strong > a').should('include.text', ''+userData.randomUsername+'')


});


// cy.WpImageUpload()
Cypress.Commands.add('WpImageUpload', () => {
    cy.log(' -- WpImageUpload function --')

    let upLoadImage = filePathImage();

    cy.log(' -- upLoadImage.filepath :: '+upLoadImage.filepath+' --')
    cy.log(' -- upLoadImage.filename :: '+upLoadImage.filename+' --')


    cy.log(' -- generateRandomNum(4) :: '+generateRandomNum(4)+' --')
    cy.log(' -- doRandomString() :: '+doRandomString()+' --')
    cy.log(' -- doDateString() :: '+doDateString()+' --')
    cy.log(' -- doRandomTime() :: '+doRandomTime()+' --')



    // Visit upload image form
    cy.log (''+globalValues.wpAdmin+''+globalValues.imageNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.imageNewCreatePath+'')
    // cy.wait(globalValues.timerNavigation)


    // Upload an image using CSS selector
    cy.get('#async-upload', {timeout: 15000}).attachFile('' + upLoadImage.filepath + '')
    // cy.wait(globalValues.timerUploading)
    cy.get('#html-upload', {timeout: 15000}).click({force: true})
    // cy.wait(globalValues.timerUploading)
    


    // Upload image using XPATH selector
    // cy.xpath('//*[@id="async-upload"]', {timeout: 15000}).attachFile('' + upLoadImage.filepath + '')
    // cy.wait(globalValues.timerUploading)
    // cy.xpath('//*[@id="html-upload"]', {timeout: 15000}).click({force: true})
    // cy.wait(globalValues.timerUploading)

  
    // search the filename e.g animal_snake.jpg
    cy.get('#media-search-input', {timeout: 10000}).type(''+upLoadImage.filename+'{enter}')
    // cy.wait(globalValues.timerNavigation)


    // Check filename e.g animal_snake.jpg
    cy.get('#the-list > tr > td.title.column-title.has-row-actions.column-primary > p').should('include.text', ''+upLoadImage.filename+'')
    // cy.wait(globalValues.timerNavigation)

    // delete image
    cy.get('#the-list > tr > td.title.column-title.has-row-actions.column-primary > div > span.delete > a', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)

    cy.on('window:alert',()=>{
         cy.get('input[type="submit"]').click();
      })
    // Clean the search field and relaod the media page
    cy.get('#media-search-input', {timeout: 10000}).clear()
    // cy.wait(globalValues.timerNavigation)
    cy.reload()

});



// cy.JsLoopArrayReminder()
Cypress.Commands.add('JsLoopArrayReminder', () => {
    cy.log(' -- JsLoopArrayReminder function --')

cy.log('navigation.WpMainNavLabel.length :: '+navigation.WpMainNavLabel.length+'')
            

            cy.log('\n--- CASE_1 :: LOOP :: for')
            let i = 0
            for (i; i < (navigation.WpMainNavLabel.length); i++) {
                cy.log('--- link_' + i + ' :: '+navigation.WpMainNavLabel[i]+'')

            }//EOL


            cy.log('\n--- CASE_2 :: LOOP :: forEach')
            navigation.WpMainNavLabel.forEach((label, index) => {
            cy.log('--- label :: '+label+'')
            cy.log('--- index :: '+index+'')

            cy.contains(label, {timeout: 15000}).click({force: true})
            cy.location('pathname').should('eq', ''+globalValues.wpAdminFull+''+navigation.WpMainNavNameFiles[index]+'');
            
            })

            cy.log('\n--- CASE_3 :: LOOP :: Object and forEach')

            Object.values(navigation.WpMainNavLabel).forEach((label, index) => {
                     cy.log('--- label :: '+label+'')
                     cy.log('--- index :: '+index+'')
                     cy.get(''+navigation.WpMainNavCssSelector[index]+'').should('have.text', label)
            })

});

// cy.WpBackMutipleLoginRole(username, password, role)
Cypress.Commands.add('WpBackMutipleLoginRole', (username, password, role) => {

    cy.log(' -- WpBackMutipleLoginRole function --')
    cy.log(' -- login as '+role+' --')
    cy.visit('/')
    cy.wait(globalValues.timer)
    cy.log('\n --- go the backend')
    cy.visit(globalValues.wpAdmin)
    cy.wait(globalValues.timer)
    cy.log('\n --- fill the form')
    cy.get('#user_login' ).type(username)
    cy.get('#user_pass' ).type(password)
    cy.get('#wp-submit' ).click()
    cy.log('\n --- I am in WP Backend!')
    // cy.wait(globalValues.timer_hurray)
    cy.wait(globalValues.timer)



});


// cy.WpUserCreateFixture()
Cypress.Commands.add('WpUserCreateFixture', (userData) => {
    cy.log(' -- WpUserCreateFixture function --')

    
    assert.isObject(userData, 'userData is an object')
    // Visit create category form
    cy.log (''+globalValues.wpAdmin+''+globalValues.userNewCreatePath+'')
    cy.visit(''+globalValues.wpAdmin+''+globalValues.userNewCreatePath+'')
    cy.wait(globalValues.timerNavigation)

  
    // Add user_login
    cy.get('#user_login', {timeout: 10000}).type(''+userData.username+'')

    // Add email
    cy.get('#email', {timeout: 10000}).type(''+userData.email+'')

    // Add first_name
    cy.get('#first_name', {timeout: 10000}).type(''+userData.name+'')

    // Add last_name
    cy.get('#last_name', {timeout: 10000}).type(''+userData.name+'')

    // Add url
    cy.get('#url', {timeout: 10000}).type(''+userData.website+'')


    // Add password (pass1)
    // Keep password from WP

    // Save the user
    cy.get('#createusersub', {timeout: 10000}).click({force: true})
    // cy.wait(globalValues.timerNavigation)
    
    cy.reload()
    // cy.wait(globalValues.timerNavigation)

    // Check save using cypress
    cy.get('#user-search-input', {timeout: 10000}).type(''+userData.username+'')
    cy.get('#search-submit', {timeout: 10000}).click({force: true})
    cy.get('#the-list > tr > td.username.column-username.has-row-actions.column-primary > strong > a').should('include.text', ''+userData.username+'')

});

