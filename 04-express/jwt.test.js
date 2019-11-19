const server = require('./authentication-example');
const axios = require('axios');
const assert = require('assert');

describe('authorization', () => {

    after(() => {
        server.close()
    })

    it('test jwt fails', async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/todo/');
        } catch(err) {
            assert.deepEqual(err.response.status, 401);
        }
        
        
    });

    it('test jwt fails', async () => {
        const response = await axios.get('http://localhost:3000/api/todo/', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU3NDE2NDE2N30.I075sx4NOT7LlzJCd52VqEEONyTS7CuJy9xjmA1Qy2M'
            }
        });
        assert.deepEqual(response.status, 200);
        assert.deepEqual(response.data.length, 3);
    })
});