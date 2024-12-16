//now let us learn object

const person ={
    name:"akshay",
    nomi:'ravi',
    age:20,
    address:{
        city:"mumbai",
        pincode:400001
    }
}
//dot notation and bracket notation
console.log(person);
console.log(person.name);
console.log(person.address.city);
console.log(person["name"])
console.log(person["address"]["city"]);
console.log(person.nomi);