/* Strings:

Single quote: ''
Double quote: ""
BackTick :    ` ` 

*/

console.clear();

let fName = 'Saima'
console.log(fName);

let lName = 'Syed';
console.log(lName);

// My name is Saima
//1st way
let sentence1 = 'My name is ' + fName
console.log(sentence1)

// 2nd way
// My name is 'Saima'

let sentence2 = "My name is 'Saima'"
console.log(sentence2)

// 3rd way
// My name is 'Saima'

let sentence3 = 'My name is \'Saima\''
console.log(sentence3)

// 4th way 
// BACKTICK

let firstName = 'Sam'
let lastName = "Walton"
let age = 50
let location = 'Dallas'

// Fisrt Name: Sam, Last Name: Walton, Age: 50, Location: Dallas

let info = 'First Name : ' + firstName + ', Last Name : ' + lastName + ', Age : ' + age + ', Location: ' + location;
console.log(info);

let personInfo = `First Name : ${firstName}, Last Name: ${lastName}, Age: ${age}, Location: ${location}`
console.log(personInfo)

