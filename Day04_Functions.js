/*
FUNCTIONS:
Either perform an action OR calculate a value
*/


console.clear();

// creating a function
function sum() {
    var num1 = 5;
    var num2 = 4;
    var total = num1 + num2;
    return total;
}

// calling the function 
console.log(sum());  // 9

// OR 

const result = sum() + 10;
console.log(result); // 19

// Creating a function with parameter

function square(s) {
    return s * s;
}

// calling the function
console.log(square(8)); // 64

const result1 = square(8) - 1;
console.log(result1); // 63

// if we don't put any value in the parameter
console.log(square()); //Nan

// if I pass 2 values 
console.log(square(3, 4, true)); //9  coz only the 1st parameter will be considered and will return its square value

// Without assigning default values
// function addNumbers(num1, num2, num3){
//   return num1+num2+num3;
// }

// console.log(addNumbers()); // Nan
// console.log(addNumbers(2)); // Nan
// console.log(addNumbers(2,3)); // Nan
// console.log(addNumbers(2,3,4)); // 9


// We can assign DEFAULT values in teh function parameter
function addNumbers(num1 = 2, num2 = 4, num3 = 7) {
    return num1 + num2 + num3;
}

console.log(addNumbers()); // 13

// we can assign new values... in this case default values will be overridden
console.log(addNumbers(4, 8, 9)); // 21

console.log(addNumbers(4, 8)); // 19



/*
FUNCTIONS:
We can use a function and then declare the function
NOT COMMON 
but in JS, function can be created anywhere and can be called anywhere
*/


console.clear();

// calling the function
add(2, 5); //7

// declaring the function
function add(x, y) {
    console.log(x + y);
}

add(4, 8); // 12


// function is the keyword, add is the name of the function in above example
// but in JS, we can have anonymous function (function with no name)
// we can declare anonymous function and put it in a variable ... very common practice in JS 
var sum = function (x, y) {
    console.log(x + y);
}

// calling the anonymous function using it's variable/container
sum();  // NaN
sum(5, 9);  // 14
sum(7, 8, 100); // 15 .. the 3rd parameter will not be cosidered

// create anonymous function with 3 parameters
// then put result in a variable named total
// then call the function to print the result

var total = function (num1, num2, num3) {
    console.log(num1 * num2 * num3);
}

total(5, 2, 9);  // 90
total(4, 6); // NaN. coz the 3rd param is undefined
total(2, 8, 50); // 800


