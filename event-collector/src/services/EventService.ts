import { UserEvent } from '../models/Event';
import { IEvent } from '../models/IEvent';

export class EventService {
    constructor() {

    }

    async storeEventsData(e: IEvent) {
        try {
            const ev = new UserEvent(e);
            let resp = await ev.save()
            return resp;
        } catch (error) {
            throw error;
        }
    }
}