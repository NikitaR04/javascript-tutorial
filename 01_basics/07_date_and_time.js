//Dates

const today = new Date();

console.log(today); //2026-05-19T07:56:03.563Z

console.log(today.toString()); //Tue May 19 2026 13:26:03 GMT+0530 (India Standard Time)

console.log(today.toDateString()); //Tue May 19 2026

console.log(today.toISOString());//2026-05-19T07:56:03.563Z

console.log(today.toJSON());//2026-05-19T07:56:03.563Z

console.log(today.toLocaleDateString());//19/5/2026

console.log(today.toLocaleString());//19/5/2026, 1:26:03 pm

console.log(today.toTimeString());//13:29:34 GMT+0530 (India Standard Time)

console.log(typeof today);

let myCreatedDate = new Date(2026, 0, 25);
console.log(myCreatedDate.toDateString()); //Sun Jan 25 2026

//Note: Month numbering starts from 0

let myCreatedDate2 = new Date(2026, 0, 25, 5, 3, 57, 1000);
console.log(myCreatedDate2.toLocaleString()); //25/1/2026, 5:03:58 am

console.log(myCreatedDate2.toString());//Sun Jan 25 2026 05:03:58  GMT+0530 (India Standardime)

let myCreateDate3 = new Date("2026-01-18");
console.log(myCreateDate3.toLocaleString());//18/1/2026, 5:30:00 am

myCreateDate3 = new Date("01-18-2026");
console.log(myCreateDate3.toLocaleString());//18/1/2026, 12:00:00 am

myCreateDate3 = new Date("18-01-2026");
console.log(myCreateDate3.toLocaleString()); //Invalid Date

//Note: "MM-DD-YYYY" & "YYYY-MM-DD" is valid , "DD-MM-YYYY" is Invalid

//===Timestamps==

let myTimeStamp = Date.now() //Date.now gives time in milliseconds

console.log(myTimeStamp);//1779185939337; it is milliseconds value from 1st Jan 1970 till now
console.log(myCreateDate3.getTime());//1768694400000; milliseconds upto created date

console.log(Date.now());//1779187054157
console.log(Math.floor(Date.now()/1000)); //1779187054; milliseconds to seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //4; May is 4 as Jan starts from 0
console.log(newDate.getDay());//2; Tuesday
console.log("May month number is " + (newDate.getMonth() +  1));

//Using string Interpolation

console.log(`The date is ${newDate.getDate()} and the time is ${newDate.toLocaleTimeString()}`);

const d = new Date();

console.log(
  d.toLocaleString('en-IN', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
    timeZoneName: "long"
  })
);