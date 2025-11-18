const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bac-test.xpresspago.com",
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
