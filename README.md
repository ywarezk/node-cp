## Node course

This course will cover building a backend server using node and express.

### Course Plan

- Node Introduction
  - What is Node
  - About Javascript
  - Hello World
  - Debugging
  - Advantages

- Node Modules
  - What is Module
  - require, module.exports  
  - module, exports, __dirname, __filename
  - NPM
  - NPX

- Core Modules
  - Promise
  - global
  - process
  - Error
  - Error first callback
  - fs
  - promisify, callbackify
  - EventEmitter
  - Path

- Express Introduction
  - about express
  - app
  - middleware
  - pattern middleware creator
  - express static
  - pattern: data through request
  - express.json(), express.urlencoded()
  - strategy pattern
  - express-session
  - passport
  - authorization
  - Router
  - express configurations
  - views + mustache
  - error handling
  - express generator

- EX.
  - Rest server
  - create class TodoTasks with array of todos
  - array [] 
  - [{id: 1, title: 'hello', description}]
  - request type: GET
      url: /api/task/
      send all items in array
  - request type POST
      url: /api/task/
      add item to todo array
      send back the item i created
      status: 201
  - request type PUT:

      url: /api/task/:id/

      status: 202

      update a single item in the array

      send updated item

      type: DELETE

      url: /api/task/:id/

      status: 204
      
  - res.status(201).json({})

- Unit Testing - Mocha
  - describe, it
  - first test
  - debugging the test
  - hooks
  - testing the server

- Sequelize - working with DB
  - 

- Video lecture EX. REST
  - https://youtu.be/hNWDLifTh3s

- Video Lecture GraphQL:
  - https://youtu.be/jVJUD6KI8CM

## Findal EX: REST + Graphql

### Chapter I

- Create a new express project connected to sequelize
- Create a new model and migration for User which contains the fields: firstName, email, password
- Create a REST API for getting all the users, register a user, login a user
- The login and register should provide a JWT token as well
- The password in the users table should be hashed using the library **bcrypt**
- Create the same API with GraphQL

### Chapter II

- Create a todo table and model
- create a many to many associations between the user and the todo, every user can create many todos
- serve that data using graphql, make sure you are able for each user to get all his messages and for each message to get his user

### Chapter III

- reading the todo list should be restricted to registered users
- only if you pass the JWT token in the headers: Authorization will you be able to read it.
- using passport add the JWT authentication to the todo rest api
- Can you do the same with the GraphQL todo api? 

### Chapter VI

- Add unit tests for all the apis