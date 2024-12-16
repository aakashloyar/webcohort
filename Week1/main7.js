//arrow and normal function

function hi() {
    console.log("Hi");
}
hello=()=>{
    console.log("Hello");
}
hi();
hello();



function normalFunction() {
    console.log(this);  // `this` refers to the object calling the function or the global context
}

const obj = {
    name: 'Alice',
    normalFunction: normalFunction
};

obj.normalFunction();  // `this` will refer to `obj`



const arrowFunction = () => {
    console.log(this);  // `this` refers to the surrounding context (e.g., the window object or lexical scope)
};

const obj2 = {
    name: 'Alice',
    arrowFunction: arrowFunction
};

obj2.arrowFunction();  // `this` will refer to the surrounding context, not `obj`



function Person(name) {
    this.name = name;
}

const person1 = new Person('Alice');  // Works fine

// const Person2 = (name) => {
//     this.name = name;
// };

// const person2 = new Person2('Alice');  // Error: Arrow function cannot be used as a constructor


function normalFunction() {
    console.log(arguments);  // `arguments` contains all arguments passed
}

normalFunction(1, 2, 3);  // { 0: 1, 1: 2, 2: 3 }

const arroFunction = () => {
    console.log(arguments);  // `arguments` will refer to the outer function's arguments
};

function outer() {
    arroFunction(1, 2, 3);  // { 0: 1, 1: 2, 2: 3 }
}

outer();
