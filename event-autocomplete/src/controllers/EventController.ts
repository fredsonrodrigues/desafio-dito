import { Router, Request, Response } from 'express'
import { EventService } from '../services/EventService';

export class EventController {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    async AutoCompleteEvents(req: Request, res: Response) {
        try {
            const es = new EventService();
            const evts = await es.getEventsNameBy(req.params.name);
            evts.length == 0 ? res.status(204) : res.status(200);
            res.json(evts);
        } catch (error) {
            res.status(500);
            res.json(error);
        }

    }

    async init() {
        this.router.get('/:name/', await this.AutoCompleteEvents);
    }
}