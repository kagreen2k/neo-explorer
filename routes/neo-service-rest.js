var statisticsController = reqires('../controllers/statistics');

// sets up rest endpoint - put in routes
router.get('/neo-statistics', statisticsController.neoStatistics);
