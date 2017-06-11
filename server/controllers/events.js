const Datastore = require('nedb');  
const eventsDB = new Datastore({ filename: `${__dirname}/../database/events`, autoload: true });
const EventModel = require('../models/event');

module.exports = {
    // Get All Events
    getAll(req, res, next) {
        eventsDB.find({}, (err, docs) => {
            res.json({
                status: 'success',
                data: docs
            });
        });
    },

    // Get One Event
    getOne(req, res, next) {
        eventsDB.find({ _id: req.params.id }, (err, docs) => {
            res.json({
                status: 'success',
                data: docs
            });
        });
    },

    // Adding One Event
    addOne(req, res, next) {
        eventsDB.insert(new EventModel(
            req.body.title,
            req.body.date,
            req.body.publishStatus,
            req.body.tickets,
            req.body.visitors
        ), (err, doc) => {
            if (err) next(err);

            res.json({
                status: 'success',
                data: doc
            })
        });
    },

    // Updating One Event
    updateOne(req, res, next) {
        eventsDB.update({ _id: req.params.id }, new EventModel(
            req.body.title,
            req.body.date,
            req.body.publishStatus,
            req.body.tickets,
            req.body.visitors
        ), (err, doc) => {
            if (err) next(err);

            res.json({
                status: 'success',
                data: doc
            })
        });
    },

    // Removing One Event
    removeOne(req, res, next) {
        eventsDB.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
            if (err) next(err);

            res.json({ status: 'success' });
        });
    }
}