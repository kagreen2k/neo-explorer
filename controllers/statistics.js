var neoService = require('../services/neo-service');

module.exports.index = function(request, response) {

  var callback = function(data, restResponse) {
    response.render('statistics', {title: 'NEO Statistics', neoStatistics: data});
  };

  neoService.neoStatistics(callback);
}
