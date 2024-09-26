import express, { Request, Response, Express } from "express";

import dotenv from "dotenv";

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
