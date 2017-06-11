const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');
const EventsController = require('../controllers/events');

router
    .get('/', ApiController.index)

    // Events API
    .get('/events', EventsController.getAll)
    .get('/events/:id', EventsController.getOne)
    .post('/events', EventsController.addOne)
    .put('/events/:id', EventsController.updateOne)
    .delete('/events', EventsController.remove);

module.exports = router;