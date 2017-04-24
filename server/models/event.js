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
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.tickets = tickets;
    }
    
};