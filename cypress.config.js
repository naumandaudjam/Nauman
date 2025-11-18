const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

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
    env: {
      allure: true,
      allureResultsPath: "allure-results",
      allureAttachRequests: true,
      allureReuseAfterSpec: true,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
