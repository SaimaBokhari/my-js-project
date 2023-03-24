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
console.log(typeof (friendList));  // object

var myFriendList = new Array('Sam', 'Tom', 'John', 'Sally')
console.log(myFriendList);

// getting the values from the array
console.log(friendList[3]);  // "Sally"
console.log(friendList[5]);  // undefined coz there is no data at that index

// Editting an array
// Change 'John' to 'Mary'
friendList[3] = 'Mary';
console.log(friendList); // ["Sam", "Tom", "Tim", "Mary", "Sally"]


// Adding DATA : 
//                 0 ,     1,     2,      3,     4,     5=Alex,    6,  7='Rahul'
// Adding data in the index of 5

friendList[5] = 'Alex';
console.log(friendList); // ["Sam", "Tom", "Tim", "Mary", "Sally", "Alex"]


// Adding data in the index of 7 as 'Rahul'

friendList[7] = 'Rahul';
console.log(friendList); // ["Sam", "Tom", "Tim", "Mary", "Sally", "Alex", undefined, "Rahul"]

// NOTE: When working with arrays
// 1. If there's already some data in that index, then previous data will be overwritten
// This means we changing data in that index

// 2. If there's no data in that index, then the new data will inserted
// This means we adding data in that index

//3. If there's a GAP between any two indexes, then the gap index will be undefined
// e.g. index 6 in the above code


