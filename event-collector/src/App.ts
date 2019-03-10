import express from "express";
import * as bodyParser from 'body-parser';
import { db } from "./bin/Conf";
import { EventController } from "./controllers/EventController";

class App {

    public express: express.Application;
    
    constructor() {
        this.express = express();
        this.middleware()
        this.routes()
        this.database()
    }
    /* 
        Configurações de Middleware (CORS, Body Parser.. )
    */
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private database(): void {
        db.on("error", console.error.bind(console, "MongoDB Connection error"));
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
        this.express.use('/add-event', eventController.router);
    }
}
export default new App().express;