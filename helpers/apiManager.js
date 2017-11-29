exports.apiRequest = async function(item, title) {
  var Client = require('node-rest-client').Client;
  var client = new Client();

  var baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  console.log('Request for item ' + title +
    ' (method ' + item.method + '):');

  switch (item.method) {

    case 'post':
      var args = {
        url: item.url,
        title: title
      };
      await client.post(baseUrl,
        function(data, args,
          response) {
          console.log(data);
        });
      break;

    case 'get':
    default:
      await client.get(baseUrl +
        '?' +
        'url="' + item.url + '"' +
        '&' +
        'title="' + title + '"',
        function(data, response) {
          console.log(data);
        });
      break;
  }
};
