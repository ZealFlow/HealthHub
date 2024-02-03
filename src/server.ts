import route from "./routes";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/dataSource";

dotenv.config();

const app = express();
const port = process.env.PORT;

AppDataSource
  .initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err: any) => {
      console.error("Error during Data Source initialization:", err)
  })

route(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});