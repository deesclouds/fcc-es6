/*
Use Destructuring Assignment to Assign Variables from Arrays

Note: 

ES6 makes destructuring arrays as easy as destructuring objects.

A key difference between the spread operator and array destructuring is the spread operator unpacks all contents of an array into a comma-separated list. 

We cannot pick or choose which elements we want to assign to variables.

Destructuring an array lets us to that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

The variable a is assigned the first value, b is assigned the second. 

We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b,,,c] = [1, 2, 3, 4, 5, 6,];
console.log(a, b, c); // 1, 2, 5

Instructions:
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. 
*/

let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a];
console.log(a,b)