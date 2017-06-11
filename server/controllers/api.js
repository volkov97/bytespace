const IndexModel = require('../models/index');

module.exports = {
    index(req, res, next) {
        res.json(new IndexModel(
            'This is the root of ByteSpace API.',
            'http://owuteam.com'
        ));
    }

}