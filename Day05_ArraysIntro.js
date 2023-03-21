/*
Arrays_Intro:

Arrays are just like Objects in JS
Arrays are special type of objects
We use index to get the value in array
We use [] to create arrays
*/


console.clear();

// Declaring array:

var friendList = ['Sam', 'Tom', 'John', 'Sally']
console.log(friendList);
console.log(typeof(friendList));  // object

var myFriendList = new Array('Sam', 'Tom', 'John', 'Sally')
console.log(myFriendList);

// getting the values from the array
console.log(friendList[3]);  // "Sally"
console.log(friendList[5]);  // undefined coz there is no data at that index

// Editting an array


