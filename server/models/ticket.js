/**
 * @swagger
 * definitions:
 *   Ticket:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       date:
 *         type: string
 */
module.exports = class Ticket {
    
    constructor(id, title, description, date) {
        this.id = id || 0;
        this.title = title || 'Title';
        this.description = description || 'Description';
        this.date = date || 'Date';
    }
    
};