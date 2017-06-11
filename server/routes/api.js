const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');
const EventsController = require('../controllers/events');
const SecureController = require('../controllers/secure');

router
    .get('/', ApiController.index)
    .post('/login', SecureController.login)

    // Events API
    .get('/events', EventsController.getAll)
    .get('/events/removeOne/:id', EventsController.removeOne)
    .get('/events/:id', EventsController.getOne)
    .post('/events/addOne', EventsController.addOne)
    .post('/events/updateOne/:id', EventsController.updateOne);

module.exports = router;