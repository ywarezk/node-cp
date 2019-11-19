/**
 * unit testing my rest api
 */

const assert = require('assert');
const app = require('./app');
const axios = require('axios');
const todoService = require('./todo.service');

describe('describe a group of tests', () => {
    let server;

    beforeEach(() => {
        todoService.tasks = [
            {id: 1, title: 'hello', description: 'world'},
            {id: 2, title: 'foo', description: 'bar'},
            {id: 3, title: 'yariv', description: 'katz'},
        ]
    });

    // run our server
    before((done) => {
        server = app.listen(3000, function() {
            done();
        })
    });

    before(() => {

    });

    after((done) => {
        server.close(function() {
            done();
        });
    })

    it('testing hello world', () => {
        assert.strictEqual('hello world1', 'hello world');
    })

    it('test the get api', async () => {
        const response = await axios.get('http://localhost:3000/api/task/');
        assert.deepEqual(response.data.length, 3);
    });

    it.only('test the post api', async () => {
        const response = await axios.post('http://localhost:3000/api/task/', {
            title: 'lurem',
            description: 'ipsum'
        });
        assert.deepEqual(response.data.id, 4);
    });
});

