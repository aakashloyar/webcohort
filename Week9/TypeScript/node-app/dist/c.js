"use strict";
function func1(callback) {
    setInterval(callback, 1000);
}
function func2() {
    console.log("Hi");
}
func1(func2);
