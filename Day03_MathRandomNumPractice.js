/*
Math.random():
*/

// Write a code to get random number between 0-9 (inclusive)

console.clear();

// Step 1: 
let num = Math.random();
console.log(num);

// Step 2: 
num *= 10;
console.log(num);

// Step 3: Math.floor() to round the number to nearest small whole number
num = Math.floor(num);
console.log(num);

// Note: Math.floor(num) gives us 1-10 (inclusive)


// Practice question - Love calculator

// Task1: Print name1 and name2's love score is lovescore

// Step 1: Get names from the users

var name1 = prompt('Enter your name')
var name2 = prompt("Enter your Crush's name")

// Step2: calculate love score
var loveScore = Math.random() * 100
console.log(loveScore);


// Step3: get numbers from 1-100 as whole number

loveScore = Math.ceil(loveScore)
console.log(`${name1} and ${name2} has a love score of ${loveScore} %`)

// Step4: use If statement

if (loveScore >= 80) {
    console.log('You love each other')
} else if (loveScore >= 50 && loveScore <= 80) {
    console.log('Moderate love')
} else {
    console.log('Not a strong relationship')
}



