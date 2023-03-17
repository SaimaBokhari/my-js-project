/*
FUNCTIONS INTRO:
*/


console.clear();

// 1. Declaring variables

function greet(){
  console.log('Hi, how are you?')
}

// 2. Calling the function
greet();   // "Hi, how are you?"

// 3. Declaring a function with 1 parameter
function greetPeople(person){
  console.log(`Hi ${person}`);
}

// 4. Calling the function
greetPeople('Ahmet');  // "Hi Ahmet"
greetPeople(5);       // "Hi 5"
greetPeople(true);    // "Hi true"

// 5. Declaring function with multiple parameters

function personInfo(fName, lName, age, location, isWorking){
  console.log(`${fName} , ${lName} , ${age} , ${location} , ${isWorking}`);
}

// 6. Calling the function

personInfo('Saima', 'Bokhari', 30 , 'Dubai', true);  // "Saima , Bokhari , 30 , Dubai , true"
personInfo('Saima', 'Bokhari', 30);  // "Saima , Bokhari , 30 , undefined, undefined "
