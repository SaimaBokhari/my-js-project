/*
Filter function

This function takes each num inside the numbers array 
and return the only ones that pass specific condition.

And puts them in a new array 

array.filter(function parameter)
will return the data that meets the given consition like if statement in JAVA

*/

console.clear();

var numbers = [8,1,4,12,66]

// store numbers that are greater than 10

const filteredArray = numbers.filter(

  function (eachNumber){
    return eachNumber>10
  }
)
console.log(filteredArray); // [12, 66]


// with Arrow function
const newArray = numbers.filter(eachNumber=> eachNumber >10);
console.log(newArray);  // [12, 66]

// with for each loop, we have to use if statement or ternary

const loopArray = [];

numbers.forEach(
  eachNumber => eachNumber>10 ? loopArray.push(eachNumber) : loopArray.push()
)
console.log(loopArray);  // [12, 66]

// maps and arrow functions are better as they are shorter than for each loop
// shorter codes are better but can be complicated to understand in the beginning
