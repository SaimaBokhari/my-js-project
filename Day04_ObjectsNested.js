/*
JS NESTED OBJECTS
*/


console.clear();
/*
Craete an object
Name : personInfo
fName : Jim -> string
lName : Carrey -> string
age : 50 -> number
address : {street:6th Ave. , city : NYC , state : NY} -> object inside the 
hobbies : soccer, fishing, hunting -> array
salary : function that returns '100k yearly'
*/

const personInfo = {
    fName: 'Jim',
    lName: 'Carrey',
    age: 50,
    address: {
        street: '6th Ave',
        city: 'NYC',
        state: 'NY'
    },
    hobbies: ['soccer', 'fishing', 'hunting'],
    salary: function () {
        return '100k yearly'
    }
}

console.log(personInfo);

/*
[object Object] {
  address: [object Object] {
    city: "NYC",
    state: "NY",
    street: "6th Ave"
  },
  age: 50,
  fName: "Jim",
  hobbies: ["soccer", "fishing", "hunting"],
  lName: "Carrey",
  salary: function(){
    return '100k yearly'
  }
}

*/

// calling fName from the peronInfo object

console.log(personInfo.fName); // "Jim"

// to get the full address
console.log(personInfo.address);
/*
[object Object] {
  city: "NYC",
  state: "NY",
  street: "6th Ave"
}
*/

// to get just the street
// we have to use multiple . to get the data from nested objects
console.log(personInfo.address.street);  // "6th Ave"


// Getting the data from array (hobbies) 
// the whole array
console.log(personInfo.hobbies);  // ["soccer", "fishing", "hunting"]

console.log(personInfo.hobbies[0]);  // "soccer"
console.log(personInfo.hobbies[2]);  // "hunting"
console.log(personInfo.hobbies[3]);  // undefined / nothing at this index

