/*
REDUCE :

array.reduce(accumulator, eachItem) => {
 body of the function
}
)
this function is used to accumulate the values

Reduce is used to hold onto the accumulated values
We can hold onto each number from the array

Major difference b/w reduce and map is reduce function iterates (loops through the array)
and accumulates the array values (internally)

*/

console.clear();

var numbers = [8,1,4,12,66,3]

/*
eachItem      : 8,     1,        4,          12,             66,               3 
accumulator   : 8, 8+1=9, 8+1+4=13, 8+1+4+12=25, 8+1+4+12+66=91, 8+1+4+12+66+3=94
*/

 // Traditional function

const result = numbers.reduce(

  function (accumulator, eachItem){
    console.log('accumulator: ' +accumulator)  // 8,9,13,25,66,91,94
    console.log('each Item: ' +eachItem)  // 1,4,12,66,3
    return accumulator + eachItem;
  }
)
console.log(result);  // 94

// with arrow function

const result1 = numbers.reduce(

  (accumulator, eachItem) => accumulator + eachItem
)
console.log(result1);  // 94
