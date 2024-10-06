const { defineConfig } = require("cypress");
async function  setupNodeEvents(on, config) {
  return config;
  // implement node event listeners here
};

module.exports = defineConfig({
  e2e: {
      setupNodeEvents,
      specPattern:'cypress/integration/RegisterAndLogin/*.js'
  },
});
