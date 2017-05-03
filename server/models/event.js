/**
 * @swagger
 * definitions:
 *   Event:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       date:
 *         type: string
 *       tickets:
 *         type: number
 */
module.exports = class Event {
    
    constructor(id, title, description, date, tickets) {
        this.id = id || 0;
        this.title = title || 'Title';
        this.description = description || 'Description';
        this.date = date || '00.00.0000';
        this.tickets = tickets || 0;
    }

};