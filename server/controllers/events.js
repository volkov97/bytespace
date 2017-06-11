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
        eventsDB.findOne({ _id: req.params.id }, (err, doc) => {
            res.json({
                status: 'success',
                data: doc
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
    remove(req, res, next) {
        const promises = [];

        req.body.ids.map(id => {
            promises.push(new Promise((resolve, reject) => {
                eventsDB.remove({ _id: id }, {}, (err, numRemoved) => {
                    if (err) reject(err);
                    resolve();
                });
            }));
        });

        Promise.all(promises)
            .then(() => res.json({ status: 'success' }));
    }
}