/*
Use Destructuring Assignment to Extract Values from Objects

Note:
Desstructuring Assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

ES5 code:
const user = {name: 'John Doe', age: 34};

const name = user.name; // John Doe
const age = user.age; // 34

ES6: 
const {name, age} = user;

This makes it cleaner and can extract as many or few values from the object as we want.

Instructions:

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // Only change code below this line
  
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
//   // Only change code above this line
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow } = HIGH_TEMPERATURES;
  
  // Only change code above this line