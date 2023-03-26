/*
ARROW FUNCTIONS

*/

console.clear();

// Traditional function
function sum(a){
  return a+100;
}
console.log(sum(9)); // 109

// Anonymous function
var sum1 = function (a) {
  return a+100;
}
console.log(sum1(10)); // 110

// --------- ARROW FUNCTION => case1: one argument ------------
// 1. remove function keyword (function) and function name (sum)
// 2. use => BETWEEN THE PARAMETER BODY
// 3. use variable and store your arrow function

var arrow = (a)=>{
  return a+100;
}

// calling the function
console.log(arrow(11)); //111

// 4. OPTIONAL - can remove curly braces and return keyword 
var arrow1 = (a) => a+100;
console.log(arrow1(12)); // 112

// 5. NOTE: we can remove teh parenthesis around the parameter if there is only ONE parameter
var arrow2 = a => a+100; 
console.log(arrow2(13)); // 113

var squares = x => x*x
console.log(squares(6)); // 36

// ----------- ARROW FUNCTION => case2: functions with more than one parameter ------------
// Traditional 

function sum2(a,b){
  return a+b+100; 
}

console.log(sum2(10, 20)); // 130

// Anonymus 

var sumResult2 = function (a,b){
  return a+b+100; 
}

console.log(sumResult2(11, 21)); // 132

// with arrow function
// 1. remove function keyword (function) and the function name (sum)
// 2. use => BETWEEN THE PARAMETER BODY
// 3. use variable and store your arrow function

var arrow3 = (a,b)=>{
  return a+b+100; 
}
console.log(arrow3(12, 22)); // 134

// 4. OPTIONAL: remove the {} and return 

var arrow4 = (a,b) => a+b+100;
console.log(arrow4(13,23)); // 136

// NOTE: I cannot remove the parenthesis around 2 parameters like a, b 
// because there are more than 1 parameters



// -------- ARROW FUNCTION => case3: functions with NO parameters
// TRADITIONAL

var x=14, y=24;

function sum3(){
  return x+y+100;
}
console.log(sum3()); // 138

// ANONYMOUS

var sumResult3 = function(){
  return x+y+100;
}
console.log(sumResult3()); // 138

// ARROW FUNCTION 

var arrow3 =()=>{
  return x+y+100;
}
console.log(arrow3()); // 138

// OPTIONAL 
var arrow4 =()=> x+y+100;

console.log(arrow4()); // 138

// DONE!!!

