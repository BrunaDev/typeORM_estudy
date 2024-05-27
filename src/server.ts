import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { Author } from './entity/Author';
import { Book } from './entity/Book';

const app = require("fastify")({ logger: true });

AppDataSource.initialize().then(() => {
    app.post('/authors', async (request: any, reply: any) => {
        const { firstName, lastName } = request.body;
        const author = new Author();

        author.first_name = firstName;
        author.last_name = lastName;

        return AppDataSource.manager.save(author);
    });

    app.get("/authors", async () => {
        const list = await AppDataSource.manager.find(Author);

        return list;
    });

    app.get("/books", async () => {
        const list = await AppDataSource.manager.find(Book);

        return list;
    });

    app.listen({ port: 3000 }).then(() => {
        console.log('Is running');
    });
}).catch(error => console.log("Error during Data Source initialization:", error));