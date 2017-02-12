var express = require('express');
var router = express.Router();

var statisticsController = require('../controllers/statistics');

router.get('/', statisticsController.index);

module.exports = router;
