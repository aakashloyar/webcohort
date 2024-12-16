
function Hello() {
    {
        var a=3;
        console.log(a);
    }
    console.log(a);//no errro as var is function scope
}
Hello();
//console.log(a); //error as var is function scope

function Hi() {
    {
        let b=3;
        console.log(b);
    }
    //console.log(b);//error as let is block scope
}
Hi();


//so the basic difference is 
//var is function scope
//let is block scope 
//const is block scope and it is constant


