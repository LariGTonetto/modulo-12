const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectID: 'jvwpfc',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
