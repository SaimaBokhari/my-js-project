console.clear();
/*
Primitive DATA Types in JS
string, number, boolean, null, undefined
*/

var myName = 'Javasript'
console.log(typeof(myName));

var myName = "Java"
console.log(typeof(myName));


/*
Number literal:
We only have number data type; no int, double, long, byte etc.
*/

var myNum = 20;
console.log(typeof(myNum)); // "number"

var myNum = 20.9;
console.log(typeof(myNum)); // "number"

var myNum = 20/0;
console.log(myNum); // Infinity ... this is the value of myNum
console.log(typeof(myNum)); // "number"

/*
String+number
String dominates while concating with number in any order

*/
var num1= 20 + 'a';  // number + string
console.log(num1);  // "20a"
console.log(typeof(num1));  // "string"

var num1= 20 + "a";  // number + string
console.log(num1);  // "20a"
console.log(typeof(num1));  // "string"


var num2= 'a' + 20;  // string + number
console.log(num2);   // "a20"
console.log(typeof(num2));  // "string"

/*
Boolean
true or false
*/

var isExist = true;
console.log(isExist); //true
console.log(typeof(isExist)); // boolean


// var isExist = fasle;
// console.log(isExist);  // false
// console.log(typeof(isExist));  // boolean

/*
null
*/

var pickedColour=null;
console.log(pickedColour);  // null
console.log(typeof(pickedColour)); // "object"


/*
undefined
*/

var selectedCar;
console.log(selectedCar);  // undefined
console.log(typeof(selectedCar));  // "undefined"


var selectedCar= undefined;
console.log(selectedCar);  // undefined
console.log(typeof(selectedCar));  // "undefined"

// It's good to assign null as value to a variable in JavaScript instead of leaving it undefined.
