var yamlHelper = require('../helpers/yamlHelper.js');
var yamlDocManager = require('../helpers/yamlDocManager.js');

yamlDocManager.processYamlDoc(
  yamlHelper.loadYaml('./yaml/spotahome.yml'));
