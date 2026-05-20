const fiction = ["romcom", "comedy", "tragedy", "suspense"];
const non_fiction = ["self_help", "biographies", "factual"];

// fiction.push(non_fiction);
// console.log(fiction);

// fiction.push(non_fiction.join(", "));
// console.log(fiction);

// //=====concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// const allBooks =  fiction.concat(non_fiction);
// console.log(allBooks);

// //======spread operator:

// const all_new_Books = [...fiction, ...non_fiction];
// console.log(all_new_Books);

// //====flat(): Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// /**Output: [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ] */
// console.log(real_another_array);

//To check if the data is array:

console.log(Array.isArray("Nikita")); //false

//To convert data into array

console.log(Array.from("Nikita"));//[ 'N', 'i', 'k', 'i', 't', 'a' ]

console.log(Array.from({name: "Nikita"}));//[] ; It cannot make array here, return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


