const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    baseURL: "https://www.demoblaze.com/",
  },

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/*.feature',

  },

});



// const { defineConfig } = require("cypress");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const { allureCypress } = require("allure-cypress/reporter");

// async function setupNodeEvents(on, config) {
//   // Add Cucumber Preprocessor plugin
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
//   // File preprocessor for handling feature files
//   on("file:preprocessor", browserify.default(config));
  
//   // Allure reporter configuration
//   allureCypress(on, config, {
//     resultsDir: "allure-results",
//   });

//   return config;
// }

// module.exports = defineConfig({
//   defaultCommandTimeout: 10000,
//   env: {
//     baseURL: "https://www.demoblaze.com/",
//   },

//   e2e: {
//     setupNodeEvents,
//     specPattern: 'cypress/integration/*.feature',
//   },
// });








