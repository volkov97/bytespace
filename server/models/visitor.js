/**
 * @swagger
 * definitions:
 *   Visitor:
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 *       email:
 *         type: string
 */
module.exports = class Visitor {
    
    constructor(id, name, email) {
        this.id = id || 0;
        this.name = name || 'Name';
        this.email = email || 'Email';
    }
    
};