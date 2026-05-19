//Most Important JavaScript String Methods (With Real Use Cases)

//1. includes(): Checks whether a string contains another string.

//Real Use Cases:

//a. Search Feature

let product = "iPhone 15";

if (product.includes("iPhone")) {
    console.log("Apple product");
}

//b. Bad Word Filter

let comment = "This is stupid";

if(comment.includes("stupid")) {
    console.log("Blocked")
}

//2. indexOf() : Returns a first position of a substring, if not found -> -1

//Example:

let text = "banana";
console.log(text.indexOf("a")); //1

//a. Check Existence (old way)

if(text.indexOf("a") !== -1){
    console.log("Found");
    
}

//b. Find Position

let email = "test@gmail.com";

console.log(email.indexOf("@")); //4

//3. slice() : Extracts part of a string
// syntax: str.slice(start, end)

//a. Get File Extension:

let file1 = "photo.png";
let file2 = "photo.jpeg";

console.log(file1.slice(-4)); //.png

console.log(file2.slice(file2.lastIndexOf(".") + 1)); //jpeg

//b. Mask Credit Card

let card = "1234567812345678";

console.log(card.slice(-4)); //5678

//4. split(): Converts string into array

//Example:

let str = "apple,banana,mango";

console.log(str.split(",")); 
//Output: ["apple", "banana", "mango"]

//a. Convert Sentence to Words:

let sentence = "I love JavaScript";

console.log(sentence.split(" "));
//Output: ["I", "love", "JavaScript"]

//b. Parse CSV(Comma Seperated Values) Data

let data = "John,25,India";

let result = data.split(",");
console.log(result);

//5. replace() : Replaces first occurrence

let text = "Hello World";

console.log(text.replace("World", "JavaScript")); //Hello JavaScript

//a. Clean User Input
let phone = "999-888-777";

console.log(phone.replace("-", ""));
//Output: 999888-777 ; only first - removed

//b. Replace Using Regex

let text = "cat dog cat";

console.log(text.replace(/cat/g, "lion"));
//Output: lion dog lion

/*** Basics of Regex:
 * /cat/g is a regular expression (Regex) in JavaScript
 * It means = "Find all occurrences of "cat""
 
A regex in JavaScript looks like:

/pattern/flags

So here:

Part	Meaning
/cat/	search pattern
g	    global flag (find ALL matches)

Common Regex Flags
Flag	Meaning
g	global (all matches)
i	case-insensitive
m	multiline
s	dot matches newline

Important Regex Symbols
Regex	Meaning
.	any character
\d	digit
\w	word character
\s	whitespace
+	one or more
*	zero or more
?	optional

Example
let text = "Order 123 and 456";

console.log(text.match(/\d+/g));

Output:

["123", "456"]

Example Breakdown
/\d+/g

Means:

Part	Meaning
\d	digit
+	one or more digits
g	find all

Real World EXample

a. Remove All Spaces

let phone = "999 888 777";
console.log(phone.replace(/\s/g, ""));

Output: 999888777

Example with i
let text = "Cat cat CAT";

console.log(text.replace(/cat/i, "lion"));

Output:

lion cat CAT

Only first match, but case-insensitive.

Example with gi
let text = "Cat cat CAT";

console.log(text.replace(/cat/gi, "lion"));

Output:

lion lion lion
g → all matches
i → ignore case
 
 */

//Email validation beginner pattern:

let email = "test@gmail.com";

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

console.log(pattern.test(email)); //true

/**Symbol	Meaning
   /.../    slashes define a regex pattern
    ^	    start of string
    $	end
    []	character group 
    [^]	NOT these characters
    \s	whitespace
    +	one or more
    \.	actual dot
 */

//6. replaceAll(): Replaces all matches

let text = "a-b-c-d";

console.log(text.replaceAll("-", "_")); //a_b_c_d

//a. URL Slug Creation

let title = "learn javascript fast";

console.log(title.replaceAll(" ", "-"));
//Output: learn-javascript-fast

//7. trim() : Removes spaces from start and end

//a. Form Validation

let username = "    ";

if(username.trim() === ""){
    console.log("Empty input");
    
}

//8. toLowerCase(): Convert string to lowercase

//a. Case-Insensitive Search

let email = "TEST@GMAIL.COM";

console.log(email.toLowerCase());//test@gmail.com

//9. toUpperCase(): Converts to uppercase

//a. Formatting

let country = "india";

console.log(country.toUpperCase()); //INDIA

//10. startsWith(): Checks beginning of string

//a. URL Validation

let url = "https://google.com";

console.log(url.startsWith("https"));

//b. Command Parsing

let command = "/login";

if(command.startsWith("/")){
    console.log("Command detected");
    
}

//11. endsWith(): checks ending of string

//a. File Type Validation

let file = "resume.pdf";

if(file.endsWith(".pdf")){
    console.log("PDF file");
    
}

//12. repeat(): Repeats string multiple times

//a. Generate Stars

console.log("*".repeat(10)); 
//Output: **********

//b. Password Masking

let password = "secret";

console.log("*".repeat(password.length));

/**In Java: string length is a method of String class (Strings are object)
 * so in java use string.length() <- with parentheses
 * 
 * In Javascript, string length is a property(stores value)
 * so in JS use string.length <- without parentheses
 * */

//13. match(): Matches text using regular expressions

//a. Extract numbers:

let price = "$499";

console.log(price.match(/\d+/)[0]); //499
//match returns an array ["499"], [0] is to access 0th index element.













