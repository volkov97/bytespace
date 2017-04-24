const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');
const EventsController = require('../controllers/events');
const TicketsController = require('../controllers/tickets');
const VisitorsController = require('../controllers/visitors');

router
    .get('/', ApiController.index)

    // Events API
    .get('/events', EventsController.getAll)
    .get('/events/:id', EventsController.getOne)

    // Tickets API
    .get('/tickets', TicketsController.getAll)
    .get('/tickets/:id', TicketsController.getOne)

    // Visitors API
    .get('/visitors', VisitorsController.getAll)
    .get('/visitors/:id', VisitorsController.getOne);

module.exports = router;