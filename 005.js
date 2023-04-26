/*
Write Arrow Functions with Parameters

Note: 
Similarly with regular functions, we can pass args into arrow functions. 

const doubler = (item) => item * 2;
doubler(4); //returns 8

If an arrow function has a single parameter, the parentheses closing the parameter may be omitted.

const doubler = item => item * 2;

It's possible to pass multiple args into one arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

Instructions:

Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
*/

// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };
  
//   console.log(myConcat([1, 2], [3, 4, 5]));


  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));