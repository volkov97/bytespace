/**
 * @swagger
 * definitions:
 *   Index:
 *     properties:
 *       message:
 *         type: string
 *       madeby:
 *         type: string
 */
module.exports = class Index {
    
    constructor(message, madeby) {
        this.message = message;
        this.madeby = madeby;
    }

};