# cheat_sheet_cypress_1

1. _User interaction_ (click, type in a field, etc)
2. _Assertions_ (elements exist, url has changed, text matches some pattern)

This flow will repeat over and over in your tests. One or more assertions should follow each interaction.

## Things you should avoid

- Waits that use an arbitrary amount of time
- Testing display states of components that are part of UI libraries like material
- Using brittle selectors such as `cy.get('button:contains("Submit")')`

## Things you should do

- Test the UI, not the backend by stubbing responses with fixtures
- Alias selectors for reuse
- Alias network calls for waits, e.g. `cy.wait('@loginCall')`


- Install with npm:
```txt
# for upload
npm install --save cypress-file-upload

# for reports mochawesome and allure
npm install --save-dev mochawesome-merge
npm install --save-dev mochawesome
npm install --save-dev mochawesome-report-generator 
npm install --save-dev mocha cypress-multi-reporters 
npm install --save-dev mocha-allure-reporter

# other packages
npm install --save-dev mocha
npm install --save-dev cypress-xpath
npm install –-save-dev lodash 
npm install –-save-dev path 
npm install –-save-dev debug
npm install –-save-dev cypress-grep
npm install --save-dev typescript
npm install --save-dev faker
npm install --save-dev cypress-real-events

# for mysql
npm install --save-dev mysql

# install cucumber to use .fatire in gherkin
npm install --save-dev cypress-cucumber-preprocessor
```



## Code reminders from the book

- Working with select2:
```js
// Type tag emissions
cy.get('#contentSearchFilterBoxCollapse > div > div:nth-child(2) > div:nth-child(2) > div > span > span.selection > span > ul', {timeout: 10000}).click({force: true})
cy.get('#contentSearchFilterBoxCollapse > div > div:nth-child(2) > div:nth-child(2) > div > span > span.selection > span > ul > li > input', {timeout: 10000}).type('' + globalValues.editionProgramTagJournalEnFrançaisFacile + '{enter}', {force: true})
cy.get('#select2-search_tags_id-results > li > ul > li', {timeout: 10000}).click({force: true})


// article_authorTags
    cy.get('#page-content > form > div > div:nth-child(1) > div:nth-child(2) > div.panel-body.panel-tags > div:nth-child(1) > span').click()
    cy.get('#select2-article_authorTags-results > li > ul > li:nth-child(7)').click()

    // article_superTags
    cy.get('#page-content > form > div > div:nth-child(1) > div:nth-child(2) > div.panel-body.panel-tags > div.form-group.supertag > span > span.selection > span').click()
    cy.get('#select2-article_superTags-results > li > ul > li:nth-child(5)').click()


    // article_thematicTags
    cy.get('#page-content > form > div > div:nth-child(1) > div:nth-child(2) > div.panel-body.panel-tags > div:nth-child(3) > span').click()
    cy.get('#select2-article_thematicTags-results > li > ul > li:nth-child(5)').click()


    // article_languageLevelTags
    cy.get('#page-content > form > div > div:nth-child(1) > div:nth-child(2) > div.panel-body.panel-tags > div:nth-child(4) > span > span.selection > span', {timeout: 10000}).click({force: true})
    cy.get('#select2-article_languageLevelTags-results > li > ul > li:nth-child(2)').click({force: true})

```

- Test the visibility if there is an overlay on the main form until that save action is done fo instance:
```js
            // check visibility
            cy.get('body > div.loader.loader-waves.center-screen > div > div.sk-rect.sk-rect2').should("not.be.visible", { timeout: 20000 })
            cy.get('#transcriptionDictionary > div > div.panel-heading > h3', {timeout: 20000}).should("be.visible")

```

- Test the value in attributes of link:

```js

let aHrefRandom =''+(Math.floor(Math.random() * 100) + 1)+'';

// data-start
cy.get('#page-content > div.row > div.col-md-9 > div > div.panel-body > div > #transcription_accordion > a:nth-child('+aHrefRandom+')').invoke('attr', 'data-start').then( (data_start) => {
    const dataStart = data_start

    // cy.log(typeof(dataStart))
    // cy.log(dataStart.length)
    assert.isString(''+dataStart+'', 'value in data-start is a string')
    cy.wrap(dataStart.length).should('be.gte', 1);
})


// data-confidence

cy.get('#page-content > div.row > div.col-md-9 > div > div.panel-body > div > #transcription_accordion > a:nth-child('+aHrefRandom+')').invoke('attr', 'data-confidence').then( (data_confidence) => {
const dataConfidence = data_confidence

// cy.log(typeof(dataConfidence))
// cy.log(dataConfidence.length)
assert.isString(''+dataConfidence+'', 'value in data-confidence is a string')

// data-confidence is equal to 1 or < 1
cy.wrap(dataConfidence.length).should('be.lte', 1);
})

cy.get('#page-content > div.row > div.col-md-9 > div > div.panel-body > div > #transcription_accordion > a:nth-child('+aHrefRandom+')').should('have.attr', 'data-confidence')
```


- Open a target link but in the testing window to keep the test running:
```js
// Keep on sound
cy.get('#media-sound > div.action-btn-group > div > a').invoke('removeAttr','target').click({force: true})
cy.wait(globalValues.timerNavigation)

// Keep on transcript
cy.get('#PublicationStatusPanel > div > div > div:nth-child(2) > a').invoke('removeAttr','target').click({force: true})
cy.wait(globalValues.timerNavigation)

```

- Testing values are exported inside an object named "globalValues" within a file "allValuesVariables.js": 

```js
const globalValues = {

/*
   * LANGUAGE 
   * Language variable sent with --env LANG="pt_PT" 
   * 
 */
lang: Cypress.env('LANG'), // '+globalValues.lang+'

/* code omitted for brevity */

};


// do export literal as object
module.exports = { globalValues };

```

- Add a selector for a click action with few options: timeout and forced
```js

cy.get('#wp-admin-bar-logout > a', {timeout: 10000}).click({force: true})
 ```

- Add a custom command named WpEndTest
```js
 // cy.WpEndTest()
Cypress.Commands.add('WpEndTest', () => {
    cy.log(' -- WpEndTest function --')
    cy.log('' + globalValues.TOTEM_TEST_MAN + '')     
});   
```

- Create a loop inside a Cypress test e.g inthis example to fill up the post tags for a WordPress Post.
```js
let k = 0
    for (k = 0; k < globalValues.tagsPost.length; k++) {
       
        cy.log('--- Insert tag '+k+' ')
        cy.get('#new-tag-post_tag', {timeout: 10000}).type(''+globalValues.tagsPost[k]+'{enter}')
        // cy.wait(globalValues.contentTimerDraft)

    }//EOL
```

- Testing a value inside a field to simply ensure a saving operation. Useful to test SCRUD actions. (CRUD: Search, Create, Read, Update and Delete)
```js
// Check save using cypress
    cy.get('#title', {timeout: 10000}).should('have.value', ''+globalValues.contentArticleInputTitle+' '+globalValues.RandomString+' '+globalValues.startDateString+'')
```

- Reload the browser inside a Cypress test
```js
cy.reload()
```

- Wait for a certain amount of time in milliseconds. The value is called from an object.
```js
// cy.wait(globalValues.timerNavigation)
```

- Visit a sepcific URL. The value is called from an object e.g in our example the path od for creating a new post in WordPress.
```js
cy.visit(''+globalValues.wpAdmin+''+globalValues.postCategoryNewCreatePath+'')
```

- Clear a field
```
cy.get('#pass1', {timeout: 10000}).clear()    
```

- Testing with the Symfony Profiler with the help of a specific header

```js
cy.visit(url, {failOnStatusCode: false, headers:{'X-Fmm-Environment':''+globalValues.envSfPorfiler+''} })

// cy.bachNewVisit()
Cypress.Commands.add('bachNewVisit', (url) => {
        cy.log(' -- bachNewVisit function --')
        // cy.visit(''+globalValues.subDirectory+''+globalValues.formContentsSoundsNew+'', {failOnStatusCode: false, headers:{'X-Fmm-Environment':'dev'}})
        cy.visit(url, {failOnStatusCode: false, headers:{'X-Fmm-Environment':''+globalValues.envSfPorfiler+''} })           
});
```

- Make a function to manage captures among your tests
```js
// Add capture
cy.BachMakeScreenshot(''+globalValues.BRAND_LANG+'_'+'bachCreateSoundChapters')
```

- Testing a value (integer) inside a field
```js
cy.get('#sound_chapters_0_timestampStart').then(elem => {elem.val(15000)});
```

- Testing the non-existence of a field inside the DOM or the HTML flow
```js
cy.get('#pub-panel > div.panel-body > div:nth-child(5) > div > div > div > #filter-1').should('not.exist')
```

- Using xpath-selector instead of a css-selector. Require to install x-path plugin
```js
// edition_program
cy.xpath('//*[@id="page-content"]/form/div/div[1]/div[2]/div[2]/div[1]/span/span[1]/span').click()
```


- Using a function with random to upload an image. It pick randomly an image from an array

```js
// Upload an image
cy.xpath('//*[@id="medium_file"]').attachFile('' + filePathImageStuff() + '')
```


- Example to structure your test e.g 018_wp_make_screenshots.spec.js
```js

/* code omitted for brevity */


// Step_1
    before(function () {
        cy.log('--- WpDebug --- ')
        cy.WpDebug()

    })

    // Step_2
    beforeEach(function () {
        // Login
        cy.log('--- Login --- ')
        cy.WpLoginFormAdvanced()
    })

    // Step_3
    afterEach(function () {
        cy.log('--- Logout --- ')
        cy.WpLogout()
    })

    // Step_4
    after(function () {
        cy.log('--- WpEndingUpLight --- ')
        cy.WpEndingUpLight()

    })

    /* E2E SUITE */
    it('018_1 :: WP :: ensure the minimum BACH functioning @ux @gui @sub_navigation :: Testing ' + globalValues.lang + ' :: MAIN NAV (WpUxGuiTestingSubNavScreenshots)', function () {
        // cy.WpFakeForLogic('sub_navigation')
        cy.WpUxGuiTestingSubNavScreenshots()
        cy.MakeScreenshotGreatAgain(''+globalValues.lang+'_'+'WpUxGuiTestingSubNavScreenshots')


    })

    it.skip('END :: WP :: ensure the minimum WP functioning @end :: Testing ' + globalValues.LANGUAGE + '  :: END TESTING', function () {
        cy.WpEndTest()
    })
```

- Two Ways to get a Form Input's Value in Cypress:
```js
cy.get('[data-cy=code]').invoke('val').should((value) => {

    console.log(value);

})


cy.get('[data-cy=code]').should(($input) => {
  const value = $input.val();
    
  console.log(value); // do something with the value
    
})


// Example 1: cypress have attribute

cy.get('selector').should('have.attr', 'aria-checked', 'true')

// Example 2: cypress check element have attribute

cy.get('input').invoke('attr', 'placeholder').should('contain', 'username')

// Example 3: cypress check element have attribute

// have.attr comes from chai-jquery
cy.get('#header a').should('have.attr', 'href', '/users')

// To check the href attribute, you can write a test like this:
cy
  .get('a')
  .invoke('attr', 'href')
  .should('eq', 'https://docs.cypress.io')



cy.get('.datatable').find('tr').should('have.length', 4)


```


## Import an object

Reference: [Selector best practices](https://docs.cypress.io/guides/references/best-practices#How-It-Works)

Import an object named: globalValues and then you call literal from that object directly through our Cypress suite.
```js
/* code omitted for brevity */
const {globalValues} = require('../../support/allValuesVariables')

```

## Intercepting requests

Reference: [Network requests guide](https://docs.cypress.io/guides/guides/network-requests)

Stub a response for a call:
```js
cy.intercept('POST', '/v1/user/login', {
  statusCode: 200,
  body: {
    success: true,
    token: testToken
  }
}).as('loginCall');
```

Use a fixture for a call:
```js
cy.intercept('GET', '/config', { fixture: 'config.json' });
```

Alias a call:
```js
cy.intercept('GET', '/config').as('configCall');
```

## CSS-Selectors


- Select an element:
```js
cy.get('[data-cy=submit]')
```

- Select an element within another element:
```js
cy.get('mat-card').find('ion-icon[name=checkmark-circle]')
```

- Select elements in a shadow DOM:
```js
cy.get('pwa-action-sheet').shadow().find('.action-sheet-button:eq(0)')
```

- Select the first in a set of elements:
```js
cy.get('app-status-indicator').first()
cy.get('app-status-indicator:eq(0)')
```

- Select a specific index in a set of elements:
```js
cy.get('app-status-indicator:eq(2)')
```

- Select an element within a specific DOM structure:
```js
cy.get('#main-list mat-tree-node:last-child button.context-menu-btn')
```

- Select an element containing specific text:
```js
cy.get('button.mat-menu-item:contains("Logout")')
```

Reference: [Selector best practices](https://docs.cypress.io/guides/references/best-practices#How-It-Works)


## Interactions

- Click an element:
```js
cy.get('[data-cy=submit]').click()
```

- Click a hidden element:
```js
cy.get('[data-cy=submit]').click({ force: true })
```

- Click multiple elements:
```js
cy.get('.close-button').click({ multiple: true })
```

- Clear, type and blur a field
```js
cy.get('input[name=email]').clear().type('foo').blur()
```

- Type in a field with options, then press enter
```js
cy.get('app-search-ahead-chips').find('input').type('foo{enter}', { timeout: 2000, delay: 40 });
```

## Assertions


- Assert an element exists:
```js
cy.get('[data-cy=submitted]').should('exist');
```

- Assert an element does not exist:
```js
cy.get('[data-cy=submitted]').should('not.exist');
```

- Assert a certain number of elements exist:
```js
cy.get('app-store-item').its('length').should('be.gte', 3); // greater than or equal
cy.get('app-store-item').its('length').should('be.gt', 0); // greater than
cy.get('app-store-item').its('length').should('equal', 3);
```

- Assert an element has a class:
```js
cy.get('app-store-item').should('have.class', 'error');
```

- Assert an element has a specific CSS style:
```js
cy.get('mat-drawer app-menu-item').should('have.css', 'visibility', 'visible');
```

- Assert a url matches a regex:
```js
cy.url().should('match', /orders\/[\d]{4}$/);
```

- Assert an element's text matches a regex:
```js
cy.get('p.page-number').should((elem) => {
  expect(elem.text()).to.match(/1 of 2/); 
});
```

- Assert an input has a specific value:
```js
cy.get('@eInput').should('have.value', startVal);
```

Reference: [Cypress supported assertions](https://docs.cypress.io/guides/references/assertions)

## Commands

- Stub a login call with a valid JWT token. This token won't authenticate against your server, but it will be real enough for a UI:
```js
import * as jwt from 'jsonwebtoken';

export function mockLogin() {
  
  const issued = Date.now() / 1000;
  const expires = issued + (60 * 60); // hour later

  const tokenPayload = {
    id: '60000',
    unique_name: 'Test Account',
    email: 'test@example.com',
    nbf: issued,
    exp: expires,
    iat: issued,
    iss: 'example.com',
    aud: 'https://api.example.com'
  }
  const token = jwt.sign(tokenPayload, 'secret');

  cy.intercept('POST', 'v1/users/login', {
    statusCode: 200,
    body: {
      success: true,
      token
    }
  });

};
Cypress.Commands.add('mockLogin', mockLogin);
```

- Upload a file:
```js
import 'cypress-file-upload';

export function uploadImage(card) {
  
  cy.wrap(card).find('[data-cy=empty-slot]').click();
  cy.get('pwa-action-sheet').shadow().find('.action-sheet-button:eq(0)').click();
  // attach actual image file from fixtures folder
  cy.get('#_capacitor-camera-input').attachFile({ filePath: 'test-image.jpg'});

  cy.wrap(card).find('app-uploaded-image').find('ion-icon[name=checkmark-circle]').should('exist');
};
Cypress.Commands.add('uploadImage', uploadImage);
```

- Declare namespace to avoid typescript errors:
```ts
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mockLogin(): Chainable<typeof mockLogin>;
      uploadImage(param: any): Chainable<typeof uploadImage>;
    }
  }
}
```

