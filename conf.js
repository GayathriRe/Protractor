// An example configuration file.

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const BeautifulReporter = require('protractor-beautiful-reporter');
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [

    'test/logintest.js'
  ],

  // Disable promise manager because we are going to use async/await
  // SELENIUM_PROMISE_MANAGER: false,
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }

    }));

    jasmine.getEnv().addReporter(new BeautifulReporter({
      baseDirectory: 'reports', // Optional: Specify where to generate the report files
      screenshotsSubfolder: 'screenshots',
      jsonsSubfolder: 'jsons',
      takeScreenShotsOnlyForFailedSpecs: true,
      preserveDirectory: false
    }));

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 100000
    }
  }

};