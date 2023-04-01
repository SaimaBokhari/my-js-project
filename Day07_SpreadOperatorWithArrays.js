/*
Spread Operator: (... operator)

It is used to spread out or single out data from arrays(most common), objects or functions
... are used in front of the arrays (similar to varargs)

We can used spread operator:
1. function calls
2. array literals
3. object literals

*/

/* 2. Arrays 
Most common usage with spread operator
We can spread one array into another array
*/

const existingNums = [5, 234, 51, 61]
const newNums = [6, 1, 8]
var allNums = [existingNums, newNums]
console.log(allNums);  // [[5, 234, 51, 61], [6, 1, 8]] => 2D Array returns  .. just combining two arrays

// we use spread operator to combine the two arrays in one
// We are getting a new array that conatains all existing and new numbers 
allNums = [...existingNums, ...newNums]
console.log(allNums); // [5, 234, 51, 61, 6, 1, 8] => returns a new array merging all data in one array 

// remember ORDER MATTERS 
allNums = [...newNums, ...existingNums]
console.log(allNums); // [6, 1, 8, 5, 234, 51, 61]

// We can insert new items in the array at any place 
allNums = [1000, ...newNums, true, ...existingNums, 'apple']
console.log(allNums); // [1000, 6, 1, 8, true, 5, 234, 51, 61, "apple"]

// we can do same thing with Strings 
const languages = ['java', 'javascript', 'python']
const duty = ['develop', 'test', 'deploy']
console.log(duty); // ["develop", "test", "deploy"]

var skills = [...languages, ...duty];
console.log(skills); // ["java", "javascript", "python", "develop", "test", "deploy"]

// we can choose some 
var skills = ['java', 'javascript', ...duty, 'cleaning'];
console.log(skills);  // ["java", "javascript", "develop", "test", "deploy", "cleaning"]

// We can use the spread operator to get the copy of original array
// getting the copy of language array 

// WITHOUT spread operator 
var copyOfLanguages = languages;
console.log(copyOfLanguages); // ["java", "javascript", "python"]

// languages and copyOfLanguages are pointing at the same place in the memory 
// if we update one array, the other one will change as well at the same time 
copyOfLanguages.push('ruby');
console.log(languages);  // ["java", "javascript", "python", "ruby"]
console.log(copyOfLanguages);  // ["java", "javascript", "python", "ruby"]

// WITH spread operator 

// with spread operator, we can make a copy of the original array
// the two arrays will not point at the same point in memory 
// so when I edit/update copy, it will not affect the original

var copyWithSpread = [...languages];
console.log(copyWithSpread); // ["java", "javascript", "python", "ruby"]

copyWithSpread.push('Apex');
console.log(copyWithSpread);  // ["java", "javascript", "python", "ruby", "Apex"]
// The original will not be updated with APex
console.log(languages);  // ["java", "javascript", "python", "ruby"]
// when I make a chaneg in the copy (made with spread operator), it will not affect the original

