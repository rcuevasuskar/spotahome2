var fs = require('fs');

exports.writeFile = function (outputObject, fileName) {
  var file = fs.createWriteStream(fileName);
  file.on('error', function(err) {
    console.log(e);
  });
  for (var i = 0; i < outputObject.length; i++) {
    var item = outputObject[i];
    file.write(
      'Item number: ' + (i + 1) + '\n' +
      ' Url: ' + item.url + '\n' +
      ' Domain: ' + item.domain + '\n' +
      ' Title: ' + item.title + '\n' +
      '\n');
  }
  file.end();
};
