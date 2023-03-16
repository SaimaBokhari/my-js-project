/* Strings Manipulations:

- indexOf - same as in Java
- slice() - not in Java 
- subString() - not same as in Java 

In JS, slice() is more commonly used. 
slice(0,1) returns first letter.. first index is inclusive 
slice(2) returns letter from 3rd index and all the remaining letters

substring has a very interesting featurein JS. If we write substring(5,0) last index first,
it doesn't show error; it somehow understands and returns letters from index 0-5

but if we put reverse indexes in slice(5,0), it returns empty 
    
    
    Prompt is used to get data from user; return type is string

Practice: 
Ask user to enter a name and print "Name"
e.g.
var name=ahmet ==> Ahmet
var name=ahMET ==> Ahmet
var name= AHMET ==> Ahmet
*/

console.clear();

// Getting an input from user
let userName = prompt('Enter your name')

// Using that input

let properName=userName.slice(0,1).toUpperCase()+userName.slice(1).toLowerCase();
console.log(properName);

// userName.slice(0,1).toUpperCase => getting the first letter and converting to uppercase
// userName.slice(1).toLowerCase => getting the remaining letters and converting them to lowercase


let str1 = 'I love Javascript';

let len = str1.length;

console.log(len);

// Find index of 'love'
let indexOfLove = str1.indexOf('love')
console.log(indexOfLove); // 2

// slice(startindex, end index (optional))
// substring(startindex, end index (optional))
// Note: if there is no end index, end index will be the last index

console.log(str1.slice(3)); // slice(startindex, end index (optional))

// Note2: when slice(negative index e.g. -5), returns last 5 characters
console.log(str1.slice(-3));  // "ipt"
console.log(str1.slice(5,1)); // ""


// substring

console.log(str1.substring(3)); // "ove Javascript"
console.log(str1.substring(-3));  // "I love Javascript"
console.log(str1.substring(5,1)); // " lov"

// Note3: when substring(negative index e.g. -5), returns all characters
// Note4: when substring(5,0), it works same as substring(0,5)

