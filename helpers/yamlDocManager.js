var driverSelector = require('../helpers/driverSelector.js');
var fileWriterHelper = require('../helpers/fileWriterHelper.js');
var apiManager = require('../helpers/apiManager.js');

exports.processYamlDoc = async function(doc) {

  var outputObject = [];

  for (var i = 0; i < doc.length; i++) {
    var outputItem = await populateOutputItem(doc[i]);
    outputObject.push(outputItem);
    apiManager.apiRequest(doc[i], outputItem.title);
  }

  fileWriterHelper.writeFile(outputObject, 'properties.txt');
};

populateOutputItem = async function(inputItem) {
  var outputItem = [];

  outputItem.url = inputItem.url;

  var driver = driverSelector.setupDriver(inputItem.browser);
  await driver.get(inputItem.url);
  outputItem.domain = await driver
    .executeScript('return document.domain');
  outputItem.title = await driver.getTitle();
  await driver.quit();

  return outputItem;
};
