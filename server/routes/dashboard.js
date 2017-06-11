const express = require('express');
const router = express.Router();

const DashboardController = require('../controllers/dashboard');

router.use(DashboardController.index);

module.exports = router;