var yaml = require('js-yaml');
var fs = require('fs');

exports.loadYaml = function(fileName) {
  try {
    return yaml.safeLoad(fs.readFileSync(fileName), 'utf8');
  } catch (e) {
    console.log(e);
  }
};
