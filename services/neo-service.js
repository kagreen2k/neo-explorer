var express = require('express');
var router = express.Router();

module.exports.neoStatistics = function(callback) {

  var Client = require('node-rest-client').Client;

  var client = new Client();

  client.get("https://api.nasa.gov/neo/rest/v1/stats?api_key=DEMO_KEY",
    callback);
}
