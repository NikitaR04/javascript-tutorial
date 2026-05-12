// let score = true
// let age = "20abc"

// console.log("Score: " + score + " Type of score: " + typeof score);
// //console.log("Type of score: " + typeof(score)); //another way
// console.log("Age: " + age + " Type of age: " + typeof age);

// //To convert string to number
// let valueInNumber1 = Number(score)
// console.log("Converted type of score: " + typeof valueInNumber1);

// //Mismatch of datatype and value
// let valueInNumber2 = Number(age)
// console.log("Converted type of age: " + typeof valueInNumber2); //number
// console.log("Converted Value: " + valueInNumber2); //NaN i.e Not a Number

// //For null
// let num1 = null
// console.log("Null type: " + typeof num1);
// console.log("Null value before conversion: " + num1)
// let valueInNumber3 = Number(num1)
// console.log("Null value after conversion: " + valueInNumber3)
// console.log("Converted type: " + typeof valueInNumber3)

// let num2 = undefined
// console.log("Undefined type: " + typeof num2);
// console.log("Undefined value before conversion: " + num2)
// let valueInNumber4 = Number(num2)
// console.log("Undefined value after conversion: " + valueInNumber4)
// console.log("Converted type: " + typeof valueInNumber4)

// //"33" => 33
// //"33abc" => NaN (type Number)
// //true => 1; false => 0

// //Convert to Boolean
// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// //1 => true, 0 => false
// //"" => false
// //"name" => true
// //null => false

// //Convert to string

// let someNum = 33

// let stringNum = String(someNumber)
// console.log(stringNum);
// console.log(typeof stringNum);

// //Browser mostly give value in strings, so we need to convert as per requirement.

// // **************** Operations ***************************************************************

// let value = 3
// let negValue = -value
// // console.log(negValue);

// // console.log(2+2);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// //Use brackets inside expression for readability

// console.log(true);
// // + converts to number but not preferable
// console.log(+true);
// console.log(+"");

// let n1, n2, n3
// n1 = n2 = n3 = 2 + 2 //Not preferable

// //Increment Operator

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);
// ++gameCounter;
// console.log(gameCounter);

let x = 2
const y = x++;

console.log(`x:${x}, y:${y}`);
//Expected output: "x:3, y:2"

let a = 2
const b = ++a;

console.log(`a:${a}, b:${b}`);
//Expected output: "a:3, b:3"

let x2 = 3n;
const y2 = ++x2;

console.log(`x2:${x2}, y2:${y2}`);
// x2 is 4n; y2 is 4n




