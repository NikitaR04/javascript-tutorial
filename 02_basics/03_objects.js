//========Objects=================

//Two ways to declare object: literal and constructor

//singleton object: An object that has only one single instance throughout the program.
//A non-singleton object means: Multiple separate instances of the object can be created.

/**Example Comparison
Singleton
const appConfig = {
  theme: "dark"
};

const a = appConfig;
const b = appConfig;

console.log(a === b); // true

Both point to the same object.

Non-Singleton
const a = { theme: "dark" };
const b = { theme: "dark" };

console.log(a === b); // false

Even though contents are same, objects are different. */

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nikita",
    "full name": "Nikita R",
    mySym: "myKey0",
    [mySym]: "myKey1",
    age: 20,
    location: "Goa",
    email: "nikita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// //To access elements:
// console.log(JsUser.email); //Not preferable as it has shortcomings
// console.log(JsUser["email"]);

// console.log(JsUser.fullname); // undefined; Not preferable as it has shortcomings
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);//myKey0
// console.log(typeof "mySym");//string ; typeof key
// console.log(typeof JsUser.mySym);//string; typeof value

// console.log(JsUser[mySym]); //myKey1
// console.log(typeof mySym);//symbol
// console.log(typeof JsUser[mySym]);//string

// const keys = Object.keys(JsUser);
// console.log(typeof keys[2]);

// //To change the values of key
// JsUser.email = "nikita@claude.com"

// //To lock or freeze the object so that no one can modify the values
// Object.freeze(JsUser)
// JsUser.email = "nikita@tml.com"
// console.log(JsUser);

//Adding function inside object

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


