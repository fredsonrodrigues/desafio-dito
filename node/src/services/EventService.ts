import fetch from 'node-fetch'
import { Event } from '../models/Event';
import { Product } from '../models/Product';

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
            var timeline = new Array<Event>();
            let data = await this.getEventsFromService();
            let store = data.events.filter((e: any) => e.event === "comprou");
            let product = data.events.filter((e: any) => e.event === "comprou-produto");

            store.map((el: any) => {
                let event = new Event(el);
                let products = new Array<Product>();
                product.map((el: any) =>
                    el.custom_data.map((e: any) => {
                        if (e.key === "transaction_id" && e.value === event.transaction_id) {
                            products.push(new Product(el))
                        }
                    })
                );
                event.products = products;
                timeline.push(event)
            })

            return timeline;
        } catch (error) {
            throw error;
        }
    }
    
    
}