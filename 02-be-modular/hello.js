// import hello from './hello';

// export default function hello() {... }

// module.exports = function hello() {
//     console.log('hello world');
// }

module.exports = {
    hello : () => {
        console.log('hello world');
    },
    foo: 'bar'
}

// exports = module.exports = {};

// exports = {
//     hello : () => {
//         console.log('hello world');
//     },
//     foo: 'bar'
// }

// exports.hello = () => {
//     console.log('hello world');
// }