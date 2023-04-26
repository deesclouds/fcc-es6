/*
Use Arrow Functions to Write Concise Anonymous Functions

Note: 
Functions names aren't required, especially when passing a function as an arg to another function. 

To do this we can create inline function. Naming them isn't required since we aren't reusing them anywhere else in our code. 

To do this we use this syntax:

const myFunc = function(){
    const myVar = 'value';
    return myVar;
}

ES6 uses syntactic sugar to not write anonymous functions that way.
We can use arrow function syntax instead.

const myFun = () => {
    const myVar = 'value';
    return myVar;
}

When there's no function body, and only a return value, arrow functions allow us to omit the keyword return as well as the brackets surrounding the code. 

const myFunc = () => 'value';

Instructions:

Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
*/

// const magic = function() {
//     return new Date();
//   };

const magic = () => new Date();