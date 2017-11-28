var yaml = require('js-yaml');
var fs = require('fs');

try {
  var doc = yaml.safeLoad(fs.readFileSync(
    './yaml/spotahome.yml'), 'utf8');
  console.log(doc);
} catch (e) {
  console.log(e);
}

// describe('Exercise_1', function() {
//       it('Test', async function() {
//
//         });
//       });
