// this file, index.js isthe usual name for the entry point of a nodejs application.
// This file is also sometime called app.js or server.js

// const genRandomNum = require("./commonjs-utils-example"); // <-- default CommonJS style import of a singular import.
// we can import functions, objects, arrays etc.
// console.log(`random number is ${genRandomNum()}`);

//in order to import multiple things, we change what we did above on to this:
const {
  genRandomNum,
  celsiusToFahrenheit,
} = require("./commonjs-utils-example"); //use object destructuring

console.log(`random number is ${genRandomNum()}`);
console.log(`0 Celsius to fahrenheit: ${celsiusToFahrenheit(0)}`);
