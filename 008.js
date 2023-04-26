/*
Use the Spread Operator to Evaluate Arrays In-Place

Note:
Spread Operator allows us to expand arrays, and other expressions in places where multiple parameters or elements are expected.

apply() to compute the maximum value in an array

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); //returns 89

Math.max.apply(null, arr) was used instead of Math.max(arr) since it returns NaN. 

Math.max() expects comma-separated arguments, but not an array. 
The spread operator makes this syntax much better to read and maintain. 

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //returns 89

...arr returns an unpacked array. It spreads the array. 
The spread operator only works in-place, like an argument to a function or in an array literal.

This will not work:
const spreaded = ...arr;

Instructions:

Copy all contents of arr1 into another array arr2 using the spread operator.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);