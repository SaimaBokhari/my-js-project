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
var minNum = Math.min(45, 32, 19, 100, 25);
console.log(minNum);  // 19 because numbers are already separate and spread out => which means we have 5 different data

const tempratures = [45, 32, 19, 100, 25]
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


