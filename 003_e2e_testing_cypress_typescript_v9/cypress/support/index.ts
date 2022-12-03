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


// Custom Commands with TypeScript
// Check tests in e2e-typescript-wp
// Import a set of custom commands from "support/commands" directory
import '../support/commands/addPost';
import '../support/commands/updateApi';

// PageObjects with TypeScript
// Check tests in e2e-advanced-typescript-wp
import '../support/commands/newWpBackendDashboardLogin';
import '../support/commands/newWpFrontendHomePageSearch';


