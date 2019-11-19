const myString : string = 'hello';

function hello(num : number) : string {
    return 'hello';
}

abstract class Person {

}

// const person = new Person();

interface Hello {
    myMessage : string;
}

class HelloWorld implements Hello {
    myMessage = '';

    private _hello = 'world';

    constructor(public myAge : number) {

    }
}

