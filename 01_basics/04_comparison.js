//console.log(2 > 1);
//console.log(2 >= 1); and so on...

console.log("2" > 1); //It already converts 2 to number and then compare
console.log("02" < 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/***The equal == operator and relational operators (>=, <=, >, <) handle null differently.
  The == (Abstract Equality) Rule
The == operator has a special hardcoded rule for null:

null only equals null or undefined — nothing else.

null == 0; //false (0 is neither null nor undefined)
null == undefined; //true (special rule)
null == false //false
null == "" //false

The >= (Relational Comparison) Rule
Relational operators work completely differently — they use numeric coercion:
null >= 0
→ ToNumber(null) >= ToNumber(0)
→ 0 >= 0
→ true
ToNumber(null) is 0 in JavaScript. So null silently becomes 0 before the comparison.

***/
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
//Always use strict equal operator === for equality checks
// === checks both datatype and value

console.log("2" === 2);

