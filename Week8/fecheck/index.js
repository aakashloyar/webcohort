const jwt=require('jsonwebtoken');

let username="aaku";
let password="sakku";
let secret="aalu";
const token=jwt.sign({username,password},secret);
console.log(token);
const x=jwt.verify(token,secret);
const y=jwt.decode(token);
console.log(x);
console.log(y);