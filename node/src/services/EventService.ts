import fetch from 'node-fetch'

export class EventService {
    constructor() {
        
    }

    private async getEventsFromService() {
        try {
            let res = await fetch('https://storage.googleapis.com/dito-questions/events.json');
            let data = await res.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    
    async getEventsData() {
        try {
            let data = await this.getEventsFromService();
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    
}