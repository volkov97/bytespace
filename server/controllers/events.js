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
    }

}