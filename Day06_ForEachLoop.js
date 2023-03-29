/*
FOR EACH LOOP:
array.forEach(function parameter)
Remmeber normal loop doen't take function parameter

For each loop rerurns the entire data from the array without using any index
When we need to use index, then use regular for loop
Use For each loop, when we need the entire data from JSON data
*/

console.clear();

const array1 = ['a', 'b', 'c']
const array2 = [1,2,3]

// print all items of array1

array1.forEach(
  function(eachItem){
    console.log(eachItem);  // "a", "b", "c"
  }
)

// print all items of array1 with Arrow function

array1.forEach(
  eachItem => console.log(eachItem) // "a", "b", "c"
)
// OR 
array2.forEach(eachNumber => console.log(eachNumber))  // 1 2 3




