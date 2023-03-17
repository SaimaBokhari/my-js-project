/* Conditionals: If/Else Statements

IMPORTANT NOTE: 
0, FALSE, null, undefined, "", NaN (Not a Number) are considered False
All other values are True


*/

console.clear()

if(0){
  console.log('True');
}else{
  console.log('False');  // False
}


if(null){
  console.log('True');
}else{
  console.log('False');  // False
}


if(10){
  console.log('True');
}else{
  console.log('False');  // True
}

if('Apple'){
  console.log('True');
}else{
  console.log('False');  // True
}

if(NaN){
  console.log('True');
}else{
  console.log('False');  // False
}

if(""){
  console.log('True');
}else{
  console.log('False');  // False
}

if(" "){
    console.log('True');
  }else{
    console.log('False');  // True
  }

if(undefined){
  console.log('True');
}else{
  console.log('False');  // False
}

if("javascript"){
  console.log('True');
}else{
  console.log('False');  // True
}


// ---------------------

const x = 4, y="4" , z = 5;

if(x==y){  // true
  console.log('x and y are euqal');
}else{
  console.log('x and y are Not euqal');
}


if(x===y){   // false
  console.log('x and y are euqal');
}else{
  console.log('x and y are Not euqal');
}

if(x>=y && z>=y){  // true
  console.log('true');
}else{
  console.log('false');
}


