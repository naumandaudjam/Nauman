const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "allure",
  reporterOptions: {
    allureLogCypress: true,
    allureOmitPreviousAttemptScreenshots: true,
  },
  e2e: {
    baseUrl: "https://bac-test.xpresspago.com",
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
