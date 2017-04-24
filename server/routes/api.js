const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');
const EventsController = require('../controllers/events');

router
    .get('/', ApiController.index)
    .get('/events', EventsController.getAll);

module.exports = router;