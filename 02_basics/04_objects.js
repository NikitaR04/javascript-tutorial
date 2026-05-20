//=======Object Constructor

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nikita",
            lastname: "learner"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser["fullname"]["userfullname"]["firstname"]);

//To merge objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2};
// console.log(obj3);
 /**{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a'
, '4': 'b' } } */

// //a.Merge using assign():
// const obj3 = Object.assign({}, obj1, obj2, obj4);// {} : empty array is target; obj1,obj2,obj4 are sources
// console.log(obj3);

//b. Merge using spread: (Mostly used)
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

//Data coming from database...in array fromat

const users = [
    {
        id: 1,
        email: "nik@gmail.com"
    },
     {
        id: 1,
        email: "nik@gmail.com"
    },
     {
        id: 1,
        email: "nik@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] ; output type is array
console.log(Object.values(tinderUser));//[ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false