interface Users {
	firstName: string;
	lastName: string;
	age: number;
}
function filteredUser(user:Users[]) {
    return user.filter(x=>x.age>18);
}

console.log(filteredUser([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));

