//callback
function calculator(a,b,callback) {
    //console.log(sum(2,4));
    return callback(a,b);
}
function sum(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}

console.log(calculator(5,6,sub));

//call back hell -> again and gain calling the functions
//callback -> function as a argument