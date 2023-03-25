/*
Arrays_Intro:

Arrays are just like Objects in JS
Arrays are special type of objects
We use index to get the value in array
We use [] to create arrays

*/


console.clear();

var ages = [10, 14, 34, 16, 10]
console.log(ages);
console.log(typeof (ages));  // object

//5. indexOf(item) -> returns the first index of the item
// indexOf(item, startingIndex)  -> retruns the first index of the item starting
// lastIndexOf(item) -> retruns the last index of the item
// Note: returns -1 if there is no matching item in the array (same as in Java)

console.log(ages.indexOf(10));  // 0
console.log(ages.indexOf(10, 1));  // 4
console.log(ages.lastIndexOf(10));  // 4
console.log(ages.indexOf(100));  // -1

//6. includes(item) -> looks for the item, returns true if item exist in the array, returns false, it it doesn't
// includes(item, startingIndex)

console.log(ages.includes(14)); // true
console.log(ages.includes(14, 3)); // false coz there is no 14 at the index of 3
console.log(ages.includes('apple')); // false

const isExist = ages.includes(50);
console.log(isExist); // false

