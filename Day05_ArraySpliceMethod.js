/*
Arrays:

Arrays are just like Objects in JS
Arrays are special type of objects
We use index to get the value in array
We use [] to create arrays

*/


console.clear();

// 7. splice() changes the contents of an array by removing or replacing
//    elements  and /or adding new elements in given place 
//    start with the index that you want to delete the value from, then tell how many elements you want to delete
//    and then give the value you want to add



const months = ['Jan', 'March', 'April', 'June'];
//months.splice(1); // delete everything after the first index including the first index
// inserts at index 1
// console.log(months);  // ["Jan"]

// months.splice(1,2);  // delete ONLY 2 elements after the first index including the first index
// console.log(months);  // ["Jan", "June"]

// months.splice(1,1);  // delete ONLY 1 element after the first index including the first index
// console.log(months);  // deletes March only ["Jan", "April", "June"]

// months.splice(2,1);  // delete ONLY 1 element from index 2 and including it
// console.log(months);  // deletes April only ["Jan", "March", "June"]

// months.splice(2,2);  // delete 2 elements from index 2 and including it
// console.log(months);  // deletes April and June  ["Jan", "March"]

//          startIndex, Delete Num, Item (inserted in startIndex)
months.splice(2, 1, 'May');  // will delete only 1 item at index 2 and insert May at index 2
console.log(months);  // ["Jan", "March", "May", "June"]


months.splice(2, 1, 'May', 'June', 'July', 'August');
console.log(months); // can add multiple elements ["Jan", "March", "May", "June", "July", "August", "June"]


// if i don't want to delete any ,and just add more data 
months.splice(2, 0, 'May', 'June', 'July', 'August');
console.log(months); // ["Jan", "March", "May", "June", "July", "August", "May", "June", "July", "August", "June"]

// Practice

/* 7. splice() is used to delete or insert(add) items in any index in an array

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

*/

var fruits = ['apple', 'orange', 'banana', false, 10]

console.log(fruits); // ["apple", "orange", "banana", false, 10]

fruits.splice(2, 1);
console.log(fruits);  // ["apple", "orange", false, 10


fruits.splice(1, 0, 'kiwi', 'peach');
console.log(fruits);  // ["apple", "kiwi", "peach", "orange", false, 10]

fruits.splice(2, 2, 'cherry', 'strawberry', 'appricot');
console.log(fruits);  // ["apple", "kiwi", "cherry", "strawberry", "appricot", false, 10]

// startIndex = -1 means from the last
// deleted item= 1
fruits.splice(-1, 1);
console.log(fruits); // ["apple", "kiwi", "cherry", "strawberry", "appricot", false]

// NOTE: negative number means starting from the last index
fruits.splice(-4, 2);
console.log(fruits); // ["apple", "kiwi", "cherry", false, 10]

// following means delete 0 item, insert tea, coffee at index -1
fruits.splice(-1, 0, 'tea', 'coffee');
console.log(fruits); // ["apple", "kiwi", "cherry", false, "tea", "coffee", 10]


// practice link -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


