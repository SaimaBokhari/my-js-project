/* 
String Manipulations:

*/

console.clear()

// concat() function is to used to concatanate strings

let fName = 'John'
let lName = 'Walker'

console.log(fName+ ' '+ lName);  // "John Walker"

console.log(fName.concat(lName)); // "JohnWalker"

// trim() function removes spaces from the beginning and end of a string

let words = ' Today is Wednesday '
let trimmed = words.trim();
console.log(trimmed); // "Today is Wednesday"

// charAt('index') returns the character at that index. index starts from 0

let indexOfWords = words.charAt(4)
console.log(indexOfWords);  // "a"

// split('character') returns an array that is splitted from that character

let splitted = words.split(' '); // split words from space
console.log(splitted); // ["", "Today", "is", "Wednesday", ""]

// to get the splitted words ony
let cleanSplit = trimmed.split(' ')
console.log(cleanSplit);  // ["Today", "is", "Wednesday"]

let states = "AL, AK, AZ, AR, NY, NF, FL";
let listOfStates = states.split(',')
console.log(listOfStates);  // ["AL", " AK", " AZ", " AR", " NY", " NF", " FL"]

