console.clear();

/*
reverse() functions => reverses the array 
*/

var nums = [5, 3, 7, 3, -6, 11]
console.log(`ORIGINAL: ${nums}`);  // "ORIGINAL: 5,3,7,3,-6,11"

nums.reverse();
console.log(`REVERSED: ${nums}`);  // "REVERSED: 11,-6,3,7,3,5"


/*
sort() function sorts the array in ascending order in alphabetical order
*/

nums.sort();
console.log(`SORTED: ${nums}`);  // "SORTED: -6,11,3,3,5,7"

// descending order = sort() + reverse() 
nums.reverse();
console.log(`SORTED: ${nums}`); // "SORTED: 7,5,3,3,11,-6"
