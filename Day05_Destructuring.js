/*
Destructuring:
1. Object destructuring 
2. Function destructuring
3. Array destructuring
*/

console.clear();

// 1. Object destructuring

var user = {
  myfName : 'Sam',
  myLocation : 'Dallas',
  myEmail : 'sam@fakemail.com'
}

console.log(user.myfName); // "Sam"
console.log(user.myLocation); // "Dallas"
console.log(user.myEmail); // "sam@fakemail.com"

// OR I can use container

var name1 = user.myfName
var location1 = user.myLocation
var email1 = user.myEmail

console.log(name1);// "Sam"
console.log(location1);  // "Dallas"
console.log(email1);  // "sam@fakemail.com"

/*
Destructuring the user objects 
benefit is we can access the date directly without . or [] notation
NOTE: key names must match to the original object 
if keys don't match, the data will be undefined 
For example: 
var {myfName, myLocation, myEmail} = user;
console.log(fName); //  undefined coz there is no fName key in the original user object

*/


var {myfName, myLocation, myEmail} = user;
console.log(myfName); // "Sam"
console.log(myLocation); // "Dallas"
console.log(myEmail); // "sam@fakemail.com"


// 2. Function destructuring

function getUser(){
  return {
    name2 : 'Sam',
    location2 : 'NYC',
    email2 : 'sam@gmail.com'
  }
}

// destructuring the function

var {name2, location2, email2} = getUser()

console.log(name2);  // "Sam"
console.log(location2); // "NYC"
console.log(email2); // "sam@gmail.com"


// 3. Array destructuring

var user1 = ['Tim', 'LA', 'tim@yahoo.com']

// without destructuring 

var userName = user1[0]
var locationTim = user1[1]
var emailTim = user1[2]

console.log(userName); // "Tim"
console.log(locationTim); // "LA"
console.log(emailTim); // "tim@yahoo.com"


// With destructuring 

var [userName,locationTim, emailTim] = user1; 

console.log(userName); // "Tim"
console.log(locationTim); // "LA"
console.log(emailTim); // "tim@yahoo.com"


// NOTE: during array destructuring, we can give any name we want. 