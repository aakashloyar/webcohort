//now let us learn about some asynchornous function
function hi() {
    console.log("I am a function");
}
setTimeout(hi,2000);

setInterval(hi,2000);//infite loop


setTimeout(function() {
    console.log("I am a function");
},2000);
//this is other syntax of writing the function
