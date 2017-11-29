var driverSelector = require('../helpers/driverSelector.js');
var fileWriterHelper = require('../helpers/fileWriterHelper.js');

exports.processYamlDoc = async function(doc) {

  var outputObject = [];

  for (var i = 0; i < doc.length; i++) {
    outputObject.push(await populateOutputItem(doc[i]));
  }

  fileWriterHelper.writeFile(outputObject, 'properties.txt');
};

populateOutputItem = async function(inputItem) {
  var outputItem = [];

  var driver = driverSelector.setupDriver(inputItem.browser);

  outputItem.url = inputItem.url;
  await driver.get(inputItem.url);
  outputItem.domain = await driver
    .executeScript('return document.domain');
  outputItem.title = await driver.getTitle();
  await driver.quit();

  return outputItem;
};
