// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

// --------- My solution ---------

// function sumRange(n, t = 0) {
//     // base case
//     if (n === 0) {
//         console.log(t)
//         return 
//     }
//     const b = t += n 
//     sumRange(n - 1, b)
// } 
// sumRange(3)

// -----------------------------------------------------------------------------

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

// -----------------------------------------------------------------------------

// function power(base, exponent) {
//     if (exponent === 0) {
//         return 1
//     }
//     return base * power(base, exponent - 1 )
// }
// console.log(power(2, 5))

// -----------------------------------------------------------------------------

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
 
// function factorial(num) {

//     if (num === 1) {
//         return num
//     }

//     return num * factorial(num - 1)
// }

// console.log(factorial(5))

// -----------------------------------------------------------------------------

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

// -----------------------------------------------------------------------------

// ASSIGNMENT 1
// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].


// ASSIGNMENT 2 
// Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
