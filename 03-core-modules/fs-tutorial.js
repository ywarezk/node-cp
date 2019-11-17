

const fs = require('fs');
const { promisify, callbackify } = require('util');

// bad practice
try {
    fs.readFile('./hello.txt', (err, data) => {
        if (err) {
            // deal with error
            // console.log('something happened');
            throw err;
        } else {
            console.log(data.toString());
        }
        
    });
} catch(err) {
    console.log('something happened');
}


const readFilePromise = promisify(fs.readFile);

readFilePromise('./hello.txt').then((data) => {

}).catch((err) => {})


