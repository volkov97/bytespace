const VisitorModel = require('../models/visitor');

module.exports = {
    /**
     * @swagger
     * /visitors/:
     *   get:
     *     tags:
     *       - Visitors
     *     description: Get all museum visitors.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: All bytespace museum visitors.
     *         schema:
     *           $ref: '#/definitions/Visitor'
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
     * /visitors/{id}:
     *   get:
     *     tags:
     *       - Visitors
     *     description: Get one museum visitor.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id of visitor
     *         required: true
     *         type: number
     *     responses:
     *       200:
     *         description: One bytespace museum visitor.
     *         schema:
     *           $ref: '#/definitions/Visitor'
     */
    getOne(req, res, next) {
        res.json(new VisitorModel());
    }

}