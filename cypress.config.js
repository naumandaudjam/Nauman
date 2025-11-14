const { defineConfig } = require("cypress");
const shouldRecordArtifacts = process.env.CYPRESS_RECORD_ARTIFACTS === "1";

module.exports = defineConfig({
  video: shouldRecordArtifacts,
  screenshotOnRunFailure: shouldRecordArtifacts,
  e2e: {
    baseUrl: "https://bac-test.xpresspago.com",
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
