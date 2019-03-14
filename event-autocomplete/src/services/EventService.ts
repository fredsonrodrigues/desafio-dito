import { UserEvent } from "../models/Event";
import { IEvent } from "../models/IEvent";

export class EventService {
    constructor() {
        
    }

    async getEventsNameBy(param: string) {
        try {
            const ev:Array<IEvent> = await UserEvent.find({ event: new RegExp(param, 'i') });
            const result = ev.length == 0 ? ev : Array.from(new Set(ev.map(x => x.event)));
            return result;
        } catch (error) {
            throw new Error(error);
        }

    }
}