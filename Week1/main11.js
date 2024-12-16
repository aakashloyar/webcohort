const user={
    name: 'John',
    age: 30
}
//JSON.parse-> string to object
//JSON.stringify-> object to string
const le=JSON.stringify(user);
console.log(le);

const user2='{ "name": "John", "age": 30 }';
const le2=JSON.parse(user2);
console.log(le2);