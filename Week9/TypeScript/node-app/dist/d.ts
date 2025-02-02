interface User{
    name:string,
    email:string,
    age:number
}

function isLegal(user:User):boolean {
    if(user.age>18) return true;
    else return false;
}

const user1:User={
    name:"aakash",
    email:"aalu@g",
    age:11
}

