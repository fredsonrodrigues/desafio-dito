import { Router, Request, Response } from 'express'
import { EventService } from '../services/EventService'

export class EventController {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    async getEvents(req: Request, res: Response) {
        try {
            let tmlSrv = new EventService();
            let result = await tmlSrv.getEventsData();
            res.json({timeline: result})
        } catch (error) {
            res.status(500);
            res.json(error)
        }
    }

    async init() {
        this.router.get('/', await this.getEvents);
    }
}