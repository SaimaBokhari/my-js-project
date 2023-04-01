/*
Spread Operator: (... operator)

It is used to spread out or single out data from arrays(most common), objects or functions
... are used in front of the arrays (similar to varargs)

We can used spread operator:
1. function calls
2. array literals
3. object literals

*/

// 3. OBJECTS 

const fullName = {
    fName:'James',
    lName:'Bond'
  }
  
  var userInfo = {
    fullName, 
    id: 1, 
    username:'007'
  }
  console.log(userInfo);
  
  /*
  [object Object] {
    fullName: [object Object] {   // fullName is inserted as one object and makes it NESTED 
      fName: "James",
      lName: "Bond"
    },
    id: 1,
    username: "007"
  }
  */
  
  // If we want to insert the properties from fullName into userInfo, we need to use SPREAD OPERATOR
  
  var userInfo = {
    ...fullName, 
    id: 1, 
    username:'007'
  }
  console.log(userInfo);  // NOW the two objects are merged properly
  
  /*
  [object Object] {
    fName: "James",
    id: 1,
    lName: "Bond",
    username: "007"
  }
  */