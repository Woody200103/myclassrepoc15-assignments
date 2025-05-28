// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'David';
let lastName = 'Hazelwood';
let country = 'USA';
let city = 'Bean Station';
let age = 36;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country);  // string
console.log(typeof city); // string
console.log(typeof age); // number 
console.log(isMarried);
console.log(year); 

// Check if type of '10' is equal to 10 //
console.log(typeof '10'); // string
console.log(typeof 10); // number
 console.log(typeof '10' === typeof 10); // false, because '10' is a string and 10 is a number

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')); // 9
console.log(parseInt('9.8') === 10); // false, because parseInt('9.8') returns 9

// Boolean value is either true or false. 


// Write three JavaScript statement which provide truthy value.
let truthyValue1 = 1; // non-zero number
let truthyValue2 = 'Hello'; // non-empty string
let truthyValue3 = {}; // non-empty object

// Write three JavaScript statement which provide falsy value.
let falsyValue1 = 0; // zero
let falsyValue2 = ''; // empty string
let falsyValue3 = null; // null value
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
true; console.log(4 > 3); // true  
// 4 >= 3
true; console.log(4 >= 3); // true
// 4 < 3
false; console.log(4 < 3); // false
// 4 <= 3
false; console.log(4 <= 3); // false
// 4 == 4
true; console.log(4 == 4); // true
// 4 === 4
true; console.log(4 === 4); // true
// 4 != 4
false; console.log(4 != 4); // false
// 4 !== 4
false; console.log(4 !== 4); // false
// 4 != '4'
false; console.log(4 != '4'); // false, because == checks value only
// 4 == '4'
true; console.log(4 == '4'); // true, because == checks value only
// 4 === '4'
false; console.log(4 === '4'); // false, because === checks both value and type

// Find the length of python and jargon and make a falsy comparison statement.
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.