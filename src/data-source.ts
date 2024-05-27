import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'src/dados.db',
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });