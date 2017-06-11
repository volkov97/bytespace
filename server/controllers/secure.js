const jwt = require('njwt');
const Cookies = require('cookies');
const config = require('../config/secret');

module.exports = {
    
    checkCookiesToken(req, res, next) {
        const token = new Cookies(req, res).get('access_token');

        jwt.verify(token, config.secret, (err) => {
            if (err) { return res.redirect('/login'); }
            next();
        });
    },

    login(req, res, next) {
        const checked = req.body.username === "admin" && req.body.password === "retro2017";
        
        if (checked === false) {
            return res.json({
                status: 'failure',
                error: 'Wrong credentials.'
            });
        }

        const claims = {
            sub: 'admin',
            iss: 'bytespace.by',
            permissions: 'all'
        };
        const secretKey = config.secret;
        const token = jwt.create(claims, secretKey);

        res.json({
            status: 'success',
            access_token: token.compact(),
            user: {
                firstName: 'ByteSpace',
                secondName: 'Administrator'
            }
        });
    }

}
