const TicketModel = require('../models/ticket');

module.exports = {
    /**
     * @swagger
     * /tickets/:
     *   get:
     *     tags:
     *       - Tickets
     *     description: Get all museum ticekts.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: All bytespace museum tickets.
     *         schema:
     *           $ref: '#/definitions/Ticket'
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
     * /tickets/{id}:
     *   get:
     *     tags:
     *       - Tickets
     *     description: Get one museum ticket.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id of ticket
     *         required: true
     *         type: number
     *     responses:
     *       200:
     *         description: One bytespace museum ticket.
     *         schema:
     *           $ref: '#/definitions/Ticket'
     */
    getOne(req, res, next) {
        res.json(new TicketModel());
    }

}