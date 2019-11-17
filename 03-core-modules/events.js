

const EventEmitter = require('events');

// const myEvents = new EventEmitter();

class MyTimerEvents extends EventEmitter {
    constructor() {
        super();
        this.counter = 0;
        setInterval(() => {
            this.counter++;
            if (this.counter < 5) {
                this.emit('hello', 'hello world', 2, true);
            } else {
                this.emit('error', new Error('too long'))
            }
            
            // this.emit('world', {hello: 'world'})
        }, 1000);
    }
}

const myEventEmitter = new MyTimerEvents();

myEventEmitter.on('hello', (msg, stamNumber, myBoolean) => {
    console.log(msg);
});

myEventEmitter.on('error', (err) => {
    console.log(err.message);
});

