var myFriendList = new Array('Sam', 'Tom', 'John', 'Sally')
console.log(myFriendList);


//             METHODS

// Before using the push()
console.log(myFriendList);   // ["Sam", "Tom", "John", "Sally"]
// 1. push()     : add element at the end of the array

myFriendList.push('Jack');
console.log(myFriendList);  // ["Sam", "Tom", "John", "Sally", "Jack"]

// 2. unshift()  : add element at the beginning of the array

myFriendList.unshift('Fred');
console.log(myFriendList);  // ["Fred", "Sam", "Tom", "John", "Sally", "Jack"]

// 3. pop()      : remove the first element of the array
myFriendList.pop();
console.log(myFriendList);  // ["Fred", "Sam", "Tom", "John", "Sally"]


// 4. shift()    : remove element from the beginnig of the array
myFriendList.shift();
console.log(myFriendList); // ["Sam", "Tom", "John", "Sally"]



