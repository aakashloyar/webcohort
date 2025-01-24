const jwt=require('jsonwebtoken');
const jwtPassword='secret';
const username="aaku"
const password="lalla"
let token=jwt.sign({username,password},jwtPassword,{expiresIn:'1h'});
console.log(token);
token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFha3UiLCJwYXNzd29yZCI6ImxhbGxhIiwiaWF0IjoxNzM3NDgxNDg5LCJleHAiOjE3Mzc0ODUwODl9.c";
// try{
//     const verified=jwt.verify(token,jwtPassword);
//     console.log(verified);
// } catch(error) {
//     console.log(error);
// }

try{
    const verified=jwt.decode(token);
    console.log(verified);
} catch(error) {
    console.log(error);
}
