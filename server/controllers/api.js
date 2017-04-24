const IndexModel = require('../models/index');

module.exports = {
    /**
     * @swagger
     * /:
     *   get:
     *     tags:
     *       - Index
     *     description: Returns some greaat info!
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Info about this API
     *         schema:
     *           $ref: '#/definitions/Index'
     */
    index(req, res, next) {
        res.json(new IndexModel(
            'This is the root of ByteSpace API.',
            'http://owuteam.com'
        ));
    }

}