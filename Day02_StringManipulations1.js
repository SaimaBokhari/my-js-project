/* Strings Manipulations:
    
    Prompt is used to get data from user; return type is string

*/

console.clear();

// Getting an input from user
let name = prompt('Enter your name')

// Using that input
console.log('My name is : '+name);

let tweet = prompt('Enter your tweet')
let tweetLen = tweet.length;
let maxLen=280;
console.log(`Sent : ${tweetLen}. Remaining: ${maxLen-tweetLen}`);


