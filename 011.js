/*
Use Destructuring Assignment to Assign Variables from Nested Objects

Note:

const user = {
    johnDoe: {
        age: 34, 
        email: 'johnDoe@freeCodeCamp.com'
    }
}

How to extract the values of object properties and assign them to variables with the same name:

const {johnDoe: {age, email}} = user;

How to assign an object properties' values to variables with different names:

const {johnDoe: {age: userAge, email: userEmail}} = user;

Instructions: 

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

*/

// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
//   // Only change code below this line
    
//   const lowToday = LOCAL_FORECAST.today.low;
//   const highToday = LOCAL_FORECAST.today.high;
  
//   // Only change code above this line

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  
  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
  
  // Only change code above this line

