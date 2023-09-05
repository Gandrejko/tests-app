import "reflect-metadata";
import { DB_URL, PORT } from "@config";
import express from 'express';
import { Routes } from '@interfaces/routes.interface';
import cors from 'cors';
import { connect, ConnectOptions } from "mongoose";

export class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = PORT;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`)
    });
  }

  private async connectToDatabase() {
    await connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
  }

  private initializeMiddlewares() {
    this.app.use(cors({origin: '*', credentials: true}))
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }
}
