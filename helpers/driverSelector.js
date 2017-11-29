require('geckodriver');
require('chromedriver');
var webdriver = require('selenium-webdriver');

exports.setupDriver = function(driver) {
  switch (driver) {
    case 'firefox':
      return new webdriver.Builder()
        .forBrowser('firefox')
        .build()
      break;
    case 'chrome':
    default:
      return new webdriver.Builder()
        .forBrowser('chrome')
        .build()
      break;
  }
};
