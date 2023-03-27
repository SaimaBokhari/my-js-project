/*
MAP:
- This a method of an Array 
- take a function as a parameter
- returns a new array by using each item from the original array

*/

console.clear();

var numbers = [3, 56, 2, 48, 5]

// 1. function to calculate items 

function double(x){
  return x*2;
}

// Example
const testArray = [5,6,7,8].map(double);
console.log(testArray);  // [10, 12, 14, 16]


/*
We are getting each number from numbers array
and using insided the double function
we are getting newNumbers1 array as a new array 

*/

const newNumbers1 = numbers.map(double);
console.log(newNumbers1);  // [6, 112, 4, 96, 10]

// We can pass a function directly inside the map

const newNumbers2 = numbers.map(

  function double(x){
  return x*8;
}
  
)
console.log(newNumbers2); // [24, 448, 16, 384, 40]

// ARROW FUNCTION with map
/*
get each item form numbers array
multiply by 3
and store in newNumbers3 array
*/

const newNumbers3 = numbers.map(x => x*3);
console.log(newNumbers3); // [9, 168, 6, 144, 15]

// Without map function, how can we achieve same thing
// let use for each loop
// we have to create an empty container and then use push()... extra work 
const newNumbers4 = [];
numbers.forEach(
x => newNumbers4.push(x*3)
)
console.log(newNumbers4); // [9, 168, 6, 144, 15]



