const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports/mocha",
    reportFilename: "[status]-[datetime]-[name]-report",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportPageTitle: "BAC Automation Mocha Report",
  },

  e2e: {
    baseUrl: "https://bac-test.xpresspago.com",
    pageLoadTimeout: 120000,

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
