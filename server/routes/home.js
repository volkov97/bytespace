const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/home');

router.use(HomeController.index);

module.exports = router;