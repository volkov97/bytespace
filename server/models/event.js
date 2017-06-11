module.exports = class Event {
    
    constructor(title, date, publishStatus, tickets, visitors) {
        this.title = title || 'Title';
        this.date = date || '00.00.0000';
        this.publishStatus = publishStatus || false;
        this.tickets = tickets || 0;
        this.visitors = visitors || [];
    }

};