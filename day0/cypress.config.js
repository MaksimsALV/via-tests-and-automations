const { defineConfig } = require('cypress')

module.exports = defineConfig({
    allowCypressEnv: false,
    viewportWidth: 1440,
    viewportHeight: 1400,
    e2e: {
        supportFile: false,
        setupNodeEvents(on, config) {
            // node listeners
        },
        baseUrl: 'https://demoqa.com'
    },
})