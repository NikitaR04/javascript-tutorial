/***Two categories of datatypes based on how data is stored in memory and accessed from it:
  primitive and non-primitive **/

  //Primitive datatypes (int, float/double, char, boolean)
  /**Features:
   * Store single values
   * Fixed size
   * Faster processing
   * Stored in stack memory
   */

  //Non-Primitive Data Types (Arrays, Strings, Classes/Objects, Lists,Maps)
  /**Features:
   * Can store multiple values or complex data
   * Flexible size
   * Stored in heap memory (Reference based)
   * Can have methods/functions
   */

  //Primitive (Call by value)

  //7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


  /**Is JS dynamically typed lang. or statically typed language?
   * Ans: Dynamically typed; we do not need to declare the data type of a variable
   * A variable's type can change during exexution
   * Example:
   * let value = 10 //number
   * value = "hello" // now it's a string
   * value: true //now it's a boolean
   * 
   * Statically typed: C, C++, Java, TypeScript
   * Dynamically typed: JS, Python, Ruby */ 

  //Declaring Symbol

  const id = Symbol('123');
  const anotherId = Symbol('123');

  console.log(id, anotherId);
  console.log(id === anotherId);

  const bigNumber = 3355783397388632n;
  console.log(typeof bigNumber); //bigint



    //Non-primitive( Reference type)

  //Array, Objects, Functions

  const vowel = ["a", "e", "i"]

  //Object
  let myObj = {
    name: "nikita",
    age: 21,
  }

  //Function

  const myFunction = function(){
     console.log("Hello world");
  }
  
   console.log(typeof myFunction); //object function

   //Typeof variable whose value is null: object

   // ******************************************************************

   //Two types of memory

   //Stack(Primitive), Heap(Non-Primitive)

   let myName = "Nikii"; 

   let anotherName = myName; 
   anotherName = "Nikita";

   console.log(myName);
   console.log(anotherName);

   /** Note for above case: 
    * Here the data is stored in stack as primitive datatypes are used.
    * The copy of value is sent to anotherName.
    * Changing value in another name will not changing the value of myName.
    */

   let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
   }

   let userTwo = userOne;

   userTwo.email = "Nikita@google.com";

   console.log(userOne.email);
   console.log(userTwo.email);

   /**Note for above case:
    * Here the value {  email: "user@google.com",
    upi:"user@ybl"} is stored in heap as objects are non-primitive datatypes.
    * Here the reference of the value is given to both userOne and userTwo.
    If userTwo make changes in email, it will change for userOne as well. 
    */

   
   
   
