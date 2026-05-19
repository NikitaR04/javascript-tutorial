// const  score = 400;
// console.log(score); //400


// //To explicitly defime it as Number:
// const balance = new Number(400)
// console.log(balance); //[Number: 400]

// console.log(balance.toString());
// console.log(balance.toString().length);

// //Used in E-commerce application : .toFixed()
// //.toFixed(value): It sets the precision upto decimal length = value
// console.log(balance.toFixed(2)); //400.00

// //toPrecision()
// /**toPrecision(precision?: number): string
// Number of significant digits. Must be in the range 1 - 21, inclusive. 

// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. **/

// const otherNum = 123.8966;

// console.log(otherNum.toPrecision(5)); //123.90
// console.log(otherNum.toPrecision(4));//123.9
// console.log(otherNum.toPrecision(3));//124
// console.log(otherNum.toPrecision(2)); //1.2e+2 = 1.2 *10^2

// //To make large number readable
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);


// ========================= Maths ==========================

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.8)); //4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));

//Most used: Math.random()

console.log(Math.random()); //any number btw 0 & 1 inclusive [0, 1]
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1); //3

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







