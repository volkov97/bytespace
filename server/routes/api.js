const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');
const EventsController = require('../controllers/events');

router
    .get('/', ApiController.index)

    // Events API
    .get('/events', EventsController.getAll)
    .get('/events/removeOne/:id', EventsController.removeOne)
    .get('/events/:id', EventsController.getOne)
    .post('/events/addOne', EventsController.addOne)
    .post('/events/updateOne/:id', EventsController.updateOne);

module.exports = router;