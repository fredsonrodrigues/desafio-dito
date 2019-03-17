import express from "express";
import { Request, Response } from 'express'
import * as env from 'dotenv';
import cors, { CorsOptions } from "cors";
import mongoose = require('mongoose');
import { EventController } from "./controllers/EventController";

class App {

    public express: express.Application;
    public options: CorsOptions = {};
    
    constructor() {
        env.config();
        this.express = express();
        this.middleware()
        this.routes()
        this.database()
    }
    /* 
        Configurações de Middleware (CORS, Body Parser.. )
    */
    private middleware(): void {
        this.options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };
    }


    private database(): void {
        mongoose.connect(process.env.MONGODB_URL || '', { useNewUrlParser: true });
        var db = mongoose.connection;
        db.on("error", console.error.bind(console, "MongoDB Connection error"));
    }
    /* 
        As rotas são carregadas aqui
    */
    private routes(): void {
        let router = express.Router();
        let eventController = new EventController();

        router.use(cors(this.options));

        router.get('/', (req: Request, res: Response) => {
            res.json({
                message: 'Olá Typescript'
            });
        });

        // Rotas importadas
        this.express.use('/', router);
        this.express.use('/search-event/', eventController.router);
    }
}
export default new App().express;