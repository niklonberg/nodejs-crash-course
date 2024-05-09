function genRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

/* 
nodejs uses the CommonJS module system by default
in order to export this function and use it always,
we need to do the following:
*/
module.exports = genRandomNum;
