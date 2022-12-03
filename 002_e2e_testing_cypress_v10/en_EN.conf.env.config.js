const { defineConfig } = require("cypress");


//For connecting to SQL Server
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  // const connection = mysql.createConnection(config.env.db)
  const connection = mysql.createConnection(config.env.db2)

  // start connection to db
  connection.connect()
  // cy.log(config.env.db)
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}


module.exports = defineConfig({
  env: {
    WP_FRONT_FULL_DOMAIN: 'http://cypress.mydomain.priv/wordpress/',
    WP_FRONT_SITE_TITLE: 'yalla_wp',
    WP_FRONT_TAGLINE: 'Just another WordPress site',
    WP_BACK_LOGIN_USERNAME: 'admin',
    WP_BACK_LOGIN_PASSWORD: 'admin',
    WP_BACK_DEFAULT_LANG: 'en_EN',
    WP_BACK_LOGIN_PAGE: '/wp-login.php',
    WP_BACK_FULL_DOMAIN: 'http://cypress.mydomain.priv/wordpress/wp-admin/',
    WP_BACK_SUBDIRECTORY: '/wp-admin/',
    WP_BACK_SUBDIRECTORY_FULL: '/wordpress/wp-admin/',
    WP_BACK_SUBDIRECTORY_FULL_LOGIN: '/wordpress/wp-login.php',
    WP_BACK_PROTOCOL: 'http:',
    WP_BACK_IMAGES_DIRECTORY_STATUS: 'empty',
    WP_BACK_LOSTPASSWORD_URL: 'https://cypress.mydomain.priv/wordpress/wp-login.php?action=lostpassword',
    LOCALHOST_MAIN_DOMAIN: 'cypress.mydomain.priv',
    LOCALHOST_WP_PROTOCOL: 'http://',
    LOCALHOST_WP_SUBDIRECTORY: '/wordpress/',
    CYPRESS_PROJECT_NAME: 'e2e-wp',
    CYPRESS_PROJECT_NAME_DESCRIPTION: 'This is the WP Local website for Cypress Book',
    MY_BOOLEAN: true,
    MY_INT: 9,
    MY_STRING: 'my_env_var_capital',
    YourVarNameCypressJson: 'my_env_var_camelCase',
    db: {
      host: 'localhost',
      user: 'root',
      password: 'rooty',
      database: 'wp_install_local',
    },
    db2: {
      host: 'localhost',
      user: 'root',
      password: 'rooty',
      database: 'play_wp_import_local',
    }
  },
  e2e: {
    baseUrl: 'http://cypress.mydomain.priv/wordpress/',
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    screenshotsFolder:'./po_screenshots',
    projectId: 'e2e-wp',
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    waitForAnimations: false,
    experimentalFetchPolyfill: true,
    experimentalInteractiveRunEvents: true,
    experimentalSourceRewriting: true,
    animationDistanceThreshold: 50,
    viewportWidth: 1280,
    viewportHeight: 1024,
    defaultCommandTimeout: 5000,
    slowTestThreshold: 2500,
    reporter: 'cypress-multi-reporters',
       reporterOptions: {
              reporterEnabled: 'mochawesome',
              mochawesomeReporterOptions: {
                     reportDir: 'mochawesome-report',
                     reportPageTitle: 'en_EN Cypress WP testing suite',
                     reportTitle: 'en_EN Cypress WP testing suite',
                     reportFilename: '[status]_[datetime]-[name]-report',
                     inline: false,
                     autoOpen: false,
                     overwrite: false,
                     html: true,
                     json: true,
                     timestamp: 'mmddyyyy_HHMMss',
                     charts: true,
                     quite: false,
                     code: true,
                     showSkipped: false,
                     showPassed: true,
                     showFailed: true,
                     showPending: false,
                     saveJson: true,
                     saveHtml: true,
                     dev:false
              }
       },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
    // deconstruct the individual properties
    queryDb(query) {
      // console.log(config)
      return queryTestDb(query, config) 
    },
  })

  on('task', {
    sayHello({ greeting, name }) {
      console.log('greeting :: %s ; name :: %s', greeting, name)
      return null
    },
  })

  on('task', {
    userInfo({ username, role }) {
      console.log('username :: %s, role :: %s', username, role)
      return null
    },
  })

    on('task', {
    logInfo({ message }) {
      console.log('message :: %s', message)
      return null
    },
  })

    },
  },
});