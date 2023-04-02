import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { db } from "../prisma";

import { TodosDatasource, UsersDatasource } from "./datasources";
import { createTodosEndpoints, createUsersEndpoints } from "./endpoints";

dotenv.config();
const PORT = process.env.SERVER_PORT ?? 3000;

const app = express();
app.use(helmet());

function startServer() {
  // create datasources
  const todosDatasource = new TodosDatasource(db);
  const usersDatasource = new UsersDatasource(db);
  // create endpoints
  createTodosEndpoints(app, todosDatasource);
  createUsersEndpoints(app, usersDatasource);

  // start server
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

startServer();
