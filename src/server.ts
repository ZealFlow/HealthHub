import route from "./routes";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";

dotenv.config();

const app = express();
const port = process.env.PORT;

//Connect data base: MySQL
AppDataSource;

route(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});