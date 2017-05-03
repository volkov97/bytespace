const EventModel = require('../models/event');

module.exports = {
    /**
     * @swagger
     * /events/:
     *   get:
     *     tags:
     *       - Events
     *     description: Get all museum events.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: All bytespace museum events.
     *         schema:
     *           $ref: '#/definitions/Event'
     */
    getAll(req, res, next) {
        res.json({
            message: 'success',
            data: [
                { ev: 1 }, { ev: 2 }
            ]
        });
    },

    /**
     * @swagger
     * /events/{id}:
     *   get:
     *     tags:
     *       - Events
     *     description: Get one museum event.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id of event
     *         required: true
     *         type: number
     *     responses:
     *       200:
     *         description: One bytespace museum event.
     *         schema:
     *           $ref: '#/definitions/Event'
     */
    getOne(req, res, next) {
        res.json(new EventModel());
    }
}