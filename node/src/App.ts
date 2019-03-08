import express from "express";
import { EventController } from "./controllers/EventController";

class App {

    public express: express.Application;
    
    constructor() {
        this.express = express();
        this.middleware()
        this.routes()
    }
    /* 
        Configurações de Middleware (CORS, Body Parser.. )
    */
    private middleware(): void {
        
    }

    /* 
        As rotas são carregadas aqui
    */
    private routes(): void {
        let router = express.Router();
        let eventController = new EventController();

        router.get('/', (req, res) => {
            res.json({
                message: 'Olá Typescript'
            });
        });

        // Rotas importadas
        this.express.use('/', router);
        this.express.use('/get-events/', eventController.router);
    }
}
export default new App().express;