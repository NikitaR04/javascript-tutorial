//Arrays



//JS Arrays are resizable, can contain mix of different datatypes

//JS array-copy  operations create shallow copies

//Shallow copy of an object is copy whose properties share the same references (point to same underlying values) as those of source object from which the copy was made
//So, changes in shallow copy may end up causing changes in source copy as well

//Deep Copy: It is independent of source copy
//It is a copy whose properties do not share the same references (point to same underlying values) as those of source object from which the copy was made.


const myArr = [0, 1, 2, 3, 4, 5, true, "apple"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[1]);

// Array methods

myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

//To insert element at start:
//Do not use unshift() for very large dataset
myArr.unshift(8); 
console.log(myArr);

myArr.shift(); //Removes the first element
console.log(myArr);

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(2)); //2

const newArr = myArr.join();//converts to string

console.log(myArr);
console.log(newArr);


//slice, splice

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5, true, 'apple' ]

const myn1 = myArr.slice(1, 3);

console.log(myn1);//[ 1, 2 ]
console.log("B ", myArr);//B  [ 0, 1, 2, 3, 4, 5, true, 'apple' ]

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);//C  [ 0, 4, 5, true, 'apple' ]
console.log(myn2);//[ 1, 2, 3 ]

/** slice()
Does NOT modify the original array
Returns a copy of part of the array

array.slice(start, end)
start → starting index
end → excluded

splice()
MODIFIES the original array
Used to add, remove, or replace elements

Syntax
array.splice(start, deleteCount, items...)

*/