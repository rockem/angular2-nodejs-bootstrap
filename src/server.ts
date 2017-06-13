import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import GreetRouter from "./greet/GreetRouter";
import path = require('path');
import HealthRouter from "./health/HealthRouter";

// Creates and configures an ExpressJS web server.
class server {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.sendFile(path.resolve(__dirname, 'public/index.html'));
    });

    this.express.use('/api/greeting', GreetRouter);
    this.express.use('/health', HealthRouter);
    this.express.use('/app', express.static(path.resolve(__dirname, 'public/app')));
    this.express.use('/libs', express.static(path.resolve(__dirname, 'public/libs')));
    this.express.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
    this.express.use(express.static(path.resolve(__dirname, 'public')));
  }

}
export default new server().express;
