var express = require('express');
var router = express.Router();

router.get('/neo-statistics', function(req, res) {

  var Client = require('node-rest-client').Client;

  var client = new Client();

  // direct way
  client.get("https://api.nasa.gov/neo/rest/v1/stats?api_key=DEMO_KEY", function (data, response) {
      // parsed response body as js object
      console.log(data);
      // raw response
      console.log(response);

      res.json(data);
  });
});
