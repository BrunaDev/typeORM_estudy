import 'reflect-metadata';
import Fastify from 'fastify';
import { AppDataSource } from './data-source';

const app = Fastify()

app.listen({port:4500}).then(() => {
    console.log('Is running');
})