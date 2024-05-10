// process isnt something you need to import
console.log(process.argv); // logs a whole bunch of stuff, but one interesting thing is the argv property which is an array
// if we run node .\processDemo.js importSomething
// the above console.log will log
/* 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jarja\\Desktop\\Web\\repos\\nodejs-crash-course\\processDemo.js',
  'importSomething'
]
*/

// since its an array, we can acess them
console.log(process.argv[2]);

// process.env - access system variables
console.log(process.env);

// pid - id of nodejs process
console.log(process.pid);

// cwd - current working directory
console.log(process.cwd());

// title of nodejs process
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// update() - system uptime of the process. The time from the node command till it executes
console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

// exit() - exits the process
process.exit(0);
