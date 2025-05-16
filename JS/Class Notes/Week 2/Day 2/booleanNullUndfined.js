///////////////////////////////////////////////Welcome To Booleans, Null, Undfined ///////////////////////////////
///////////////////////////////////////////primitive data types/////////////////////////////
//null
//undefined
//boolean
//What is a boolean data type? 
//A boolean is a primative data type that can only have two values: true or false.
let isLoggedIn = 'false';
const hasPermission = true;


// What powers conditional logic(if, while, ? :)

// check if user is an adult
let age = 36;
let isAdult = (age >= 18);
console.log(isAdult);


/////////////////////what are Truthy values?/////////////////////////////
//JavaScript treats all values as either truthy or falsy when used in a boolean context (inside, and if statement)

// Everything is truthy, including non-empty strings, non-zero numbers, objects, arrays, and functions.
if ('hello'){
    //run this code, because 'hello' is truthy
    console.log('This runs because non-empty strings are truthy');
}
if ({} && []) {
    console.log("Empty objects and arrays are truthy"); // This will run because empty objects and arrays are truthy
}
//Rely on ===(strict equality) rather than truthiness alone when exact type matching matters.


///////////////////////what are falsy values?/////////////////////////// 

// Only six values are falsey(i.e. they behave like false)


// Falsey values: false, 0(zero), ''or"", null, undefined, NaN(not a number)
 if (0){
    //never run, because 0(zero) is falsy
 }


///////////////////////////Undefined ////////////////////////////////

//Its the default value for:
// variables declared but not initialized(no value assigned).
// Missing function parameters
// Object properties/array indices that do not exist

let allArr = [1, 2, 23];

//Keypoint: undefined means "no value ever assigned.""

///////////////////////////Null//////////////////////////////////////

//null is an intentional abscence of any object value.

let selectedUser = null;
//we explicitly say "no user is selected"

//null is a primative vut historically (typeof null === 'object') its considered a bug in JavaScript's first implementation.

//how we use :
//to reset a variable to "nothing"
//to deferentiate from undefined which signals "never set".
