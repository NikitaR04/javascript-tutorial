const accountId = 1542;
let accountEmail = "nikita4321rani@gmail.com";
var accountPassword = "123456";
accountCity = "Bhubaneswar"; //Possible but not preferable
let accountState;
// accountId = 2 //not allowed
console.log("Account ID: " +accountId);

/* Prefer not to use var
because of issue in block scope and functional scope
*/
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

