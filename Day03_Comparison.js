/* Comparison operators:

==  compares VALUES only
=== comapres VALUES and DATA TYPE as well.
    If both are true, it returns true, otherwise returns false
    
!=  Not equal .. compares only VALUES
!== Not equal .. compares VALUES as well as DATA TYPES
> Greater than 
< less than
>= greater than or equal to
<= less than or equal to
&& and operator returns true if all true
|| OR operator returns true if one or more is true
!  Not sign .. returns the opposite of value. != not equal or opposite to equal 


*/

console.clear();

// Example 1:

const s1 = 5;
console.log(s1 == 5);  // true
console.log(s1 == "5");  // true
console.log(s1 === "5");  // false
console.log(s1 !== 5);  // false
console.log(s1 != "5");  // false
console.log(s1 !== "5");  // true

console.log(s1 > 5);    // false
console.log(s1 > "4");  // true
console.log(s1 >= 5);   // true
console.log(s1 > "6");  // false

// Example 2:

let s2 = true;
let s3 = true;

// LOGICAL OPERATORS

console.log(s2 && true);  // true
console.log(s2 && s3);  // true
console.log(s2 && s3 && false);  // false

s3 = false;

console.log(s2 || s3 || false);  // true

s3 = null;   // null is a value in JS

console.log(s2 && s3);  // null
console.log(s2 || s3);  // true
console.log(!s2);      // false
console.log(s3);       // null
console.log(!s3);      // true
