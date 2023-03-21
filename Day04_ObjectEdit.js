/*
JS OBJECTS_editing

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

console.log(person.fName); // "John"

// we can edit values using . or [] notation
// changing fName as Sam

person.fName = 'Sam';
console.log(person.fName); // "Sam"

console.log(person.isEmployed); // true
person.isEmployed = false;
console.log(person.isEmployed); // false

// changing values using [] notattion

console.log(person.lName); // "Cash"
person['lName'] = 'Blair';
console.log(person.lName); // "Blair"


// Editing the value using a new key
// person['fName'] = 'William';
// Above line works same as below combination

var newName = 'fName'; // newName acts as a temporary container (passby idea)
person[newName] = 'William';

console.log(person);

/*
[object Object] {
  age: 18,
  fName: "William",
  isEmployed: false,
  lName: "Blair"
}
*/


