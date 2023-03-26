/*
Arrays:

Arrays are just like Objects in JS
Arrays are special type of objects
We use index to get the value in array
We use [] to create arrays

*/


console.clear();
// 8. concat -> combines arrays

var drinks = ['water', 'coke', 'fanta', 'tea']
var snacks = ['sunchips', 'gold fish', 'nuts', 'popcorn']
// you can put it into another container and then log
const favFoods = drinks.concat(snacks);
console.log(favFoods);  // ["water", "coke", "fanta", "tea", "sunchips", "gold fish", "nuts", "popcorn"]


// 9. slice(startIndex(included), endIndex(excluded)) 
// returns the piece in between the start and end index ... similar to substring in strings
const myFood = favFoods.slice(1, 5);
console.log(myFood); // ["coke", "fanta", "tea", "sunchips"]

const favSnacks = snacks.slice(2);  // returns from index 2 till the last index
console.log(favSnacks);  // ["nuts", "popcorn"]

// negative index means start from the end
const slicedDrinks = drinks.slice(-1);  // start from last index till the end
console.log(slicedDrinks);  // ["tea"]


