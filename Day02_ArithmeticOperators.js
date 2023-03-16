/* Arithmetic Operations 
+,-,*,/,%,++,--,**

% remainder/mod

x++ : first use x, then add 1 (known as Post Increment)
++x : first add 1, then use x (known as Pre Increment)

x-- : first use x, then subtract 1 (Post Decrement) 
--x : first subtract 1, then use x (Pre Decrement)

*/
console.clear();

let x = 12;
let y = 3;

console.log(x++); // 12
console.log(x);   // 13
console.log(++x); // 14

x++;  // same as x+1
console.log(x);   // 15

x += 5;  // x=x+5
console.log(x);   // 20

x *= 2;
console.log(x);   // 40

x /= 3;
console.log(x);   // 13.33333


console.log(y--); // 3
console.log(y);   // 2
console.log(--y); // 1

y += 9;  //10
y %= 4;  // remainder = 2

console.log(y);

console.log(y ** 3); //2^3=2*2*2=8


