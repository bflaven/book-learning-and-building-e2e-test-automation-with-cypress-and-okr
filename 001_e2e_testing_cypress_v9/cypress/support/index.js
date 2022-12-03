// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// require for test in 001_wp_pom.spec.js
import 'cypress-real-events/support'


/* LIBRAIRIES */

// FOR GREP
require('cypress-grep')()

// ENABLE TO LOOK WITH CSS XPATH SELECTORS IN CYPRESS
require('cypress-xpath')

// ENABLE TO UPLOAD A FILE IN CYPRESS
require ('cypress-file-upload')


// Alternatively you can use CommonJS syntax:
// require('./commands')
