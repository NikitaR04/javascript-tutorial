// In JavaScript, all actual string data is generally managed in heap memory internally by the engine, even for primitive strings.

// But…

// primitive variables behave like value types
// objects behave like reference types

// const name = "Nikita"; 
// const repoCount = 10;

// console.log(name + repoCount + " Value");

// //backtics `` is used for string interpolation, where we make placeholder
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// //Syntax for string (object) declaration

const gameName = new String('chess'); //string (object); not a modern usage

// //To access key-value pair:
// console.log(gameName[0]);
// console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //It won't change original string

console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,3); //substring can't have negative index
console.log(newString);

const anotherString = gameName.slice(-5, 4); //ches; slice supports negative index which starts from end (-1)
console.log(anotherString);

//Trim(): removes starting and ending space

const newStringOne = "    Nikita   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikita.com/nikita%44learner"

console.log(url.replace('%44', '-'));

//includes(): checks whether string contains another string
console.log(url.includes('nikita')); //true
console.log(url.includes('study')); //false

