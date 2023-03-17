/* Switch statement:

*/

console.clear()

var colour = 'blue';

switch (colour) {
    case 'red':
        console.log('colour is red');
        break;  // exit switch statement
    case 'blue':
        console.log('colour is blue');
        break;
    default: // in case of no match, this line runs
        console.log('colour is neither red nor blue');
        break;
}


// Ternary Operator

var x = 10;
var z = 12;

// ternary
var y = (x > 5) ? (2 * x) : ('x is not greater than or equal 5');
console.log(y);  // 20

// Nested ternary
var result = (x > 5) ? ((z > 5) ? ('print true') : ('print false')) : ('x is not greater than or equal to 5');
console.log(result);


const a = 5, b = 6;
a > b ? console.log('logic 1') : console.log('logic 2');  // logic 2

a > 4 ? console.log('Expensive') : console.log('Cheap');  // Expensive


const result2 = a > 4 ? (b < 4 ? 'logic 1' : 'logic 2') : 'logic 3';
console.log(result2);  // logic 2

