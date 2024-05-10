import os from "os";

// userInfo()
console.log(os.userInfo());
/* logs
{
  uid: -1,
  gid: -1,
  username: 'jarja',
  homedir: 'C:\\Users\\jarja',
  shell: null
}
*/

// totalmem() - ram
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

// cpus()
console.log(os.cpus()); // logs an object for each core for the cpu, a snippet looks like
/* 
{
  model: 'AMD Ryzen 7 2700X Eight-Core Processor',
  speed: 3700,
  times: {
    user: 16373171,
    nice: 0,
    sys: 3978703,
    idle: 104566796,
    irq: 125265
  }
}
*/
