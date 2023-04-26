/*
Set Default Parameters for Your Functions

Note:

In order to help us create more flexible functions, ES6 introduces default parameters for functions. 

const greeting = (name = 'Anonymous') => 'Hello ' + name;

console.log(greeting('John'));
console.log(greeting());

Instructions:

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
*/

// Only change code below this line
// const increment = (number, value) => number + value;
// Only change code above this line

const increment = (number, value = 1) => number + value