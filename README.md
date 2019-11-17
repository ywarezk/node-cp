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
 Rest server
 create class TodoTasks with array of todos
array [] 
[{id: 1, title: 'hello', description}]
request type: GET
url: /api/task/
send all items in array
request type POST
url: /api/task/
add item to todo array
send back the item i created
status: 201
request type PUT:
url: /api/task/:id/
status: 202
update a single item in the array
send updated item
type: DELETE
url: /api/task/:id/
status: 204
res.status(201).json({})


  