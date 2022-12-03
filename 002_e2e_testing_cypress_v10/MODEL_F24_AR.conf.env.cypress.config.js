const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    LOGIN_USERNAME: 'bflaven',
    LOGIN_PASSWORD: 'xxx',
    BRAND_LANG: 'F24_AR',
    BRAND: 'F24',
    LANG: 'AR',
    BACH_FULL_DOMAIN: 'https://rec.bo.francemm.com/france24/ar/',
    BACH_MAIN_DOMAIN: 'rec.bo.francemm.com',
    IMAGES_DIRECTORY_STATUS: 'old',
    link_entrance: '//*[@id="container"]/div[4]/div[2]/div[1]/div[2]/div/a[1]',
    domain: 'rec.bo.francemm.com',
    protocol: 'https://',
    subDirectory: '/france24/ar/',
    description: 'This is the REC for F24_AR',
  },
  e2e: {
    baseUrl: 'https://rec.bo.francemm.com',
    screenshotsFolder: 'po_screenshots',
    projectId: 'bach',
    chromeWebSecurity: false,
    screenshotsFolder: '',
    waitForAnimations: true,
    experimentalFetchPolyfill: true,
    experimentalInteractiveRunEvents: true,
    experimentalSourceRewriting: false,
    animationDistanceThreshold: 50,
    viewportWidth: 1280,
    viewportHeight: 1024,
    defaultCommandTimeout: 5000,
    slowTestThreshold: 2500,
    screenshotsFolder: './po_screenshots',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
            reporterEnabled: 'mochawesome',
                mochawesomeReporterOptions: {
                reportDir: 'mochawesome-report/results',
                reportPageTitle: 'F24_AR Bach FMM',
                reportTitle: 'F24_AR Bach FMM',
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
                dev: false,
                },
            },
      } 
})



