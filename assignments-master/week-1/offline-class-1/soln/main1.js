let s="dfdfkd";
// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

let x=s.length;
console.log(x);
console.log(s.indexOf('d'));//return first index of occurenc
console.log(s.lastIndexOf('d'));//return last index of occurence
console.log(s.slice(2,3));//return slice of string
console.log(s.substring(2,3));//return substring of string
//mostly these slice and substring are same
//there are some difference between slice and substring method 

//replace
console.log(s.replace('d','k'));//replace first occurence of d with k
console.log(s);
//split
console.log(s.split('d'));//split string with d
//trim
let s1="  hello  ";
console.log(s1.trim());//remove extra space from string
//toUpperCase   
console.log(s.toUpperCase());//convert string to uppercase
//toLowerCase
console.log(s.toLowerCase());//convert string to lowercase