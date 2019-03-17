import express from "express";
import cors, {CorsOptions} from "cors";
import { EventController } from "./controllers/EventController";

class App {

    public express: express.Application;
    public options: CorsOptions = {};
    
    constructor() {
        this.express = express();
        this.middleware()
        this.routes()
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

    /* 
        As rotas são carregadas aqui
    */
    private routes(): void {
        let router = express.Router();
        let eventController = new EventController();

        router.use(cors(this.options));

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