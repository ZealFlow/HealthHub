import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../app/Models/User";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Tin18082002',
    database: 'example',
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then()
    .catch((error) => console.log(error))