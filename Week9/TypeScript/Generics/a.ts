
//to get first element 
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);

const el1 = getFirstElement([1, 2, '3']);//p1 -> user can send both types


const el2 = getFirstElement(["harkiratSingh", "ramanSingh"]);
//console.log(el.toLowerCase())//ts donot know that string or not so not functionable


//this is the solution
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);


function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const el4 = getFirstElement1(["harkiratSingh", "ramanSingh"]);
console.log(el4.toLowerCase())



// const el5 = getFirstElement1(["harkiratSingh",2]);
// console.log(el5.toLowerCase())//will give you error