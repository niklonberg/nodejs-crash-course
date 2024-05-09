function genRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

/* 
nodejs uses the CommonJS module system by default
in order to export this function and use it always,
we need to do the following:
*/
// module.exports = genRandomNum;

//lets say we add another function.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

//in order to export both of these, we need to change our module.exports statement above to this:
module.exports = {
  genRandomNum,
  celsiusToFahrenheit,
};
// we wrap what we want to export into an object
