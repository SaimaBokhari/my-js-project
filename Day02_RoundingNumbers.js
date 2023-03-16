/*
Rounding Numbers
Math.ceil(number)
Math.floor(number)
Math.round(number)
number.toFixed(ant digit of number)

*/

console.clear();

let myFavNum = 15.4567;

let ceiledNum = Math.ceil(myFavNum);
console.log(ceiledNum);  //16

let flooredNum = Math.floor(myFavNum);
console.log(flooredNum); //15

let roundedNum = Math.round(myFavNum);
console.log(roundedNum);  //15

let fixedNum = myFavNum.toFixed(2);
console.log(fixedNum); //15.46