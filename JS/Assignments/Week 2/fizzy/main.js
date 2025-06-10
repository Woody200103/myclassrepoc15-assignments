/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
/*code must include 1 loop, if/else statements, fizz for multiples of 3, buzz for multiples of 5,fizzbuzz for multiples of 3 n 5, print numbers from 1-100 */
function fizzy(n) {
if (n % 3 === 0 && n % 5 === 0) {
  return "FizzBuzz: " + n;
} else if (n % 3 === 0){
  return "Fizz: " + n;
} else if (n % 5 === 0){
  return "Buzz: " + n;
} else {
  return n;
}
}

console.log(fizzy(22));
console.log(fizzy(3));
console.log(fizzy(100));console.log(fizzy(15));

/*
for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}*/


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
