console.clear();

/*
fill() function => changes ALL of the items with the given value
and returns a new array 
changes the original array and returns a new array at the same time
*/

var nums = [5,3,7,3,-6,11]
var filledWith1 = nums.fill(1);
// changes the original array
console.log(nums);  // [1, 1, 1, 1, 1, 1]
console.log(filledWith1);   // [1, 1, 1, 1, 1, 1]

// fill(item, startIndex(included), endIndex (excluded));

var filledWith10 = nums.fill(10, 2, 5);
console.log(filledWith10);  // [1, 1, 10, 10, 10, 1]

var filledWithOrange = nums.fill('Orange', 2, 5);
console.log(filledWithOrange);  // [1, 1, "Orange", "Orange", "Orange", 1]
console.log(filledWithOrange);  // [1, 1, "Orange", "Orange", "Orange", 1]

// Task: Write a function that returns the array with incremented numbers
// EXAMPLE:
// fillNumbers(3); [1,2,3]
// fillNumbers(6); [1,2,3,4,5,6]
// fillNumbers(10);[1,2,3,4,5,6,7,8,9,10]

function fillNumbers(len){ 
  return Array(len)  // creating array with the given length
  .fill(0)  // starts with 0
  .map((input,index)=>index+1)  // 0+1=>1  in every loop returns index+1 
}

console.log(fillNumbers(3)); // [1, 2, 3]
console.log(fillNumbers(6)); // [1, 2, 3, 4, 5, 6]
console.log(fillNumbers(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

