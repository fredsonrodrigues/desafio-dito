import { TimelineService } from '../services/TimelineService'

export class TimelineController {

    constructor() {

    }
    
    static getEvents(req: any, res: any): void {
        let tmlSrv = new TimelineService();
        tmlSrv.getEventsData().then(result => 
            res.json(result)
        ).catch(e => res.error(e))
    }
}