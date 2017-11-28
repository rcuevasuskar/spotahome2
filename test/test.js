var yaml = require('js-yaml');
var fs = require('fs');
var outputYamlObject = [];

browser.ignoreSynchronization = true;

describe('Exercise_1', function() {
  it('Test', async function() {

    try {
      var doc = yaml.safeLoad(fs.readFileSync(
        './yaml/spotahome.yml'), 'utf8');
    } catch (e) {
      console.log(e);
      return;
    }

    for (var i = 0; i < doc.length; i++) {
      var item = doc[i];
      await browser.driver.get(item.url);

      var outputItem = [];
      outputItem.url = item.url;
      outputItem.domain = await browser.driver
        .executeScript('return document.domain');
      outputItem.title = await browser.driver.getTitle();

      outputYamlObject.push(outputItem);
    }

    var file = fs.createWriteStream('properties.log');
    file.on('error', function(err) {
      console.log(e);
      return;
    });
    for (var i = 0; i < outputYamlObject.length; i++) {
      var item = outputYamlObject[i];
      file.write(
        'Item number: ' + (i+1) + '\n' +
        ' Url: ' + item.url + '\n' +
        ' Domain: ' + item.domain + '\n' +
        ' Title: ' + item.title + '\n' +
        '\n');
    }
    file.end();
  });
});
