function func1(callback:()=>void) {
    setInterval(callback,1000);
}

function func2() {
    console.log("Hi");
}
func1(func2)