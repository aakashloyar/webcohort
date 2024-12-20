/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    const set=new Set();
    set.add('a');
    set.add('e');
    set.add('i');
    set.add('o');
    set.add('u');
    for(let c of str) {
      if(set.has(c.toLowerCase())) count++;
    }
    return count;
}
countVowels('hello');
module.exports = countVowels;