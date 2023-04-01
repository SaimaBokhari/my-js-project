/*
Spread Operator: (... operator)

It is used to spread out or single out data from arrays(most common), objects or functions
... are used in front of the arrays (similar to varargs)

We can used spread operator:
1. function calls
2. array literals
3. object literals

*/

console.clear();

// 1. functions 

// normal function in JS
var minNum = Math.min(45,32,19, 100, 25);
console.log(minNum);  // 19 because numbers are already separate and spread out => which means we have 5 different data

const tempratures = [45,32,19, 100, 25]
var minNumber = Math.min(tempratures);
console.log(minNumber);  // NaN. coz all data inside tempratures variable act as one data/element of the array. tempratures variable acts as one single argument

// using spread operator in a function

minNum = Math.min(...tempratures);  // now it works same as Math.min(45,32,19, 100, 25);
console.log(minNum);  // 19 

// We can use spread operator with Strings as well 
const favActors = ["Jim", "Angelina", "Jack"]
console.log(favActors); // returns single argument as array ["Jim", "Angelina", "Jack"]
console.log(...favActors);  // "Jim", "Angelina", "Jack"  ... now we get each data separately as 3 different strings

// 

const myFavNumber = "145389";  // type is string
console.log(myFavNumber);  // returns string "145389" 
console.log(Math.min(myFavNumber)); // returns number 145389
console.log(Math.min(...myFavNumber)); // spreads out all numbers and returns min number 1
console.log(Math.max(...myFavNumber)); // spreads out all numbers and returns max number 9

// We can pass strings directly in functions with spread operator
console.log(Math.max("234521235721")); // 234521235721
console.log(Math.max(..."234521235721")); // spreads out all numbers and returns max number 7

/* 2. Arrays 
Most common usage with spread operator
We can spread one array into another array
*/

const existingNums = [5,234,51,61]
const newNums = [6,1,8]
var allNums = [existingNums,newNums ]
console.log(allNums);  // [[5, 234, 51, 61], [6, 1, 8]] => 2D Array returns  .. just combining two arrays

// we use spread operator to combine the two arrays in one
// We are getting a new array that conatains all existing and new numbers 
allNums = [...existingNums,...newNums]
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

// with spread operator 

// with spread operator, we can make a copy of the original array
// the two arrays will not point at the same point in memory 
// so when I edit/update copy, it will not affect the original

var copyWithSpread = [...languages];
console.log(copyWithSpread); // ["java", "javascript", "python", "ruby"]

copyWithSpread.push('Apex');
console.log(copyWithSpread);  // ["java", "javascript", "python", "ruby", "Apex"]
// The original will not be updated with APex
console.log(languages);  // ["java", "javascript", "python", "ruby"]



























