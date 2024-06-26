const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents(on, config) {
            const env = process.env.NODE_ENV || 'production'
            const envConfig = require(`./cypress/config/${env}`)
            require('@cypress/grep/src/plugin')(config)
            config = {
                ...config,
                ...envConfig,
                env: {
                    ...config.env,
                    ...process.env,
                },
            }
            return config
        },
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
            reporterEnabled: 'mochawesome',
            mochawesomeReporterOptions: {
                reportDir: 'cypress/reports/mocha',
                quiet: true,
                overwrite: false,
                html: false,
                json: true,
                timestamp: 'mmddyyyy_HHMMss',
            },
        },
    },
})
