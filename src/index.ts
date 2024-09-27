import express, { Request, Response, Express } from "express";

import dotenv from "dotenv";

import * as middlewares from "./middlewares";

dotenv.config();
const PORT = process.env.PORT;

const app: Express = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);
