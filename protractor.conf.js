exports.config = {
  jasmineNodeOpts: {
    defaultTimeoutInterval: 5 * 60 * 1000
  },
  specs: ['test/*.js'],
  onPrepare: function() {
    var webdriver = require('selenium-webdriver');
  }
};
