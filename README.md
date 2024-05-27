# Aplicação simples com TypeORM

## Sobre
Esta aplicação cria um banco de dados utilizando SQL-3 para armazenar dados de autores e seus livros. Foi desenvolvida para testar e compreender melhor o funcionamento do TypeORM na prática.

### Como executar?

Etapas de execução:

1. Execute o comando `npm i` para instalar as dependências da aplicação.
2. Execute o comando `npm start` para iniciar o servidor.


### Como testar?

Com o Postman, ou suas plataforma de API desejada, crie as seguintes rotas:

1. `http://localhost:3000/authors` - Método: `GET`;
2. `http://localhost:3000/authors` - Método: `POST` - Body: `{ "firstName": "John", "lastName": "Fowles" }`;
3. `http://localhost:3000/books` - Método: `GET`;


###### Criado para fins de estudo

***

# Simple application with TypeORM

## About
This application creates a database using SQL-3 to store data about authors and their books. It was developed to test and better understand how TypeORM works in practice.

### How to execute?

Execution steps:

1. Run the `npm i` command to install the application dependencies.
2. Run the `npm start` command to start the server.


### How to test?

With Postman, or your desired API platform, create the following routes:

1. `http://localhost:3000/authors` - Method: `GET`;
2. `http://localhost:3000/authors` - Method: `POST` - Body: `{ "firstName": "John", "lastName": "Fowles" }`;
3. `http://localhost:3000/books` - Method: `GET`;


###### Created for study purposes
