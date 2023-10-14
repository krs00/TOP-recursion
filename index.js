// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

// --------- My solution ---------

function sumRange(n, t = 0) {
    // base case
    if (n === 0) {
        console.log(t)
        return 
    }
    const b = t += n 
    sumRange(n - 1, b)
}
sumRange(3)  

