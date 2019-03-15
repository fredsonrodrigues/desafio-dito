import { Router, Request, Response } from 'express'
import { EventService } from '../services/EventService'
import { IEvent } from '../models/IEvent';

export class EventController {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    async storeEvent(req: Request, res: Response) {
        try {
            let ev:IEvent = req.body
            const evSrv = new EventService();
            let result = await evSrv.storeEventsData(ev);
            res.json(result)
        } catch (error) {
            res.status(500);
            res.json(error)
        }
    }

    async init() {
        this.router.post('/', await this.storeEvent);
    }
}