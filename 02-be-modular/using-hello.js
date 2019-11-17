
// {hello: ..., foo: ...}
const whatPublicInHello = require('./hello');
const {merge} = require('lodash');

whatPublicInHello.hello();

const helloFoo = merge(
    {
        hello: 'world'
    },
    {
        foo: 'bar'
    }


)

console.log(JSON.stringify(helloFoo));