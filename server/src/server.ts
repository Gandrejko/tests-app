import "reflect-metadata";
import { DB_URL, PORT } from "@config";
import { AuthRoute } from '@routes/auth.route';
import { TestRoute } from "@routes/tests.route";
import cors from "cors";
import express, { Router } from "express";
import { connect, ConnectOptions } from "mongoose";

export interface Routes {
  path?: string;
  router: Router;
}

const app = express();

app.use(cors({origin: '*', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = [new AuthRoute(), new TestRoute()];

routes.forEach(route => {
  app.use('/', route.router);
});

const startApp = async () => {
  try {
    await connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    app.listen(PORT, () => {
      console.log(`🚀 App listening on the port ${PORT}`)
    });
  } catch (e) {
    console.error(e);
  }
};

startApp();
