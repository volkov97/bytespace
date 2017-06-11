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
    .get('/events/:id', EventsController.getOne)
    .post('/events', EventsController.addOne)
    .put('/events/:id', EventsController.updateOne)
    .delete('/events', EventsController.remove);

module.exports = router;