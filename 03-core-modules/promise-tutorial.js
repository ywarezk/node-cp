/**
 * what is promise?
 */

 const axios = require('axios');

 // promise is wrapping async code

 // promise
 // pending
 // resolved / rejected
 // { Promise<string> }
 const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('https://nztodo.herokuapp.com/api/task1/?format=json');
        // reject(new Error('hello'))
    }, 1000);
 });

 // promise chaining
 // Promise< number | boolean>
 timerPromise.then(
     (url) => {
        return axios.get(url);
    },
    (err) => {
        return true;
    }
)
// .catch(() => {
//     // return [];
//     throw new Error()
// })
// .then(null, () => {})
.then((res) => {
    return res.data;
}).then((todoItems) => {
    console.log(JSON.stringify(todoItems))
    throw new Error('something happened');
});

timerPromise.then()

/**
 * @returns { Promise< boolean | Array<> > }
 */
async function hello() {
    try {
        const url = await timerPromise;
        console.log('this will run after 1 sec');
        const response = await axios.get(url);
        console.log(response.data);
        return true;
    } catch(err) {
        return [];
    }   
    
}

hello();





