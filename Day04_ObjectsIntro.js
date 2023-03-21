/*
JS OBJECTS_INTRO

In JS, the reference types:

Function
Object
Array

{} is used to create an object
: is used to create key:value pair
, is used to add multiple key-value pairs

JSON format is used to store values as key:value pair
*/


console.clear();

var fName = 'John'
var lName = 'Cash'
var age = 18

console.log(`${fName} ${lName} ${age}`);

// Creating person object with 3 data 
var person = {
    fName: 'John',
    lName: 'Cash',
    age: 18,
    isEmployed: true
};

// Calling the data from person object
// We can call data by using . notation or [] notation
// . notation is more common

console.log(person);  //  return entire person object in alphabetican order

// calling single data from person object using . notation
console.log(person.fName);  // John
console.log(typeof (person.fName));  // String

console.log(person.lName);  // Cash
console.log(typeof (person.lName));  // String

console.log(person.age);    // 18
console.log(typeof (person.age));  // number

console.log(person.isEmployed);  // true
console.log(typeof (person.isEmployed));  //boolean 

// calling single data from person object using [] notation
console.log(person['fName']); // "John"
console.log(typeof (person['fName'])); // "string"

