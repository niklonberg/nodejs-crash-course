//this will be the new entry point for this application
import http from "http"; // <-- this import looks a little different, because we are importing something that is included with nodejs
// const PORT = 8000; // <-- we will use process.env variables for this later
const PORT = process.env.PORT; //<-- look at package.json start script to see how this works

//create server
// const server = http.createServer((req, res)=> { // we use the createServer method which takes a function, (does not need to be an arrow function)
//   //it has two default arguments, req (request), res (response)
//   res.write('Hello from nodejs server') // <-- we could place this text inside .end and get rid of this line and it would still work
//   res.end();
// })

//create server
// const server = http.createServer((req, res) => {
//   // we can also set headers, such as its content type.
//   // content-type specifies the type of content being sent in the http response or request body
//   // commonly text/html for HTML content, application/json for JSON data, or image/jpeg for JPEG images. See below
//   // res.setHeader("Content-Type", "text/html");
//   // res.statusCode = 404; // we can set status codes too
//   // the above can be done in one line using the writeHead method
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello</h1>");
// });

//create server
// const server = http.createServer((req, res) => {
//   // we can also use the req object, lets log it
//   console.log(req.url); // logs '/' if on http://localhost:8087/
//   console.log(req.method); // logs GET

//   // unfortunately, no matter what method or url we use, we are giving the same response back
//   // when you dont use a framework like express, you need to manually check the url
//   // in express you could do
//   // app.post('/users', () => {}) whatever we put inside the function would only run when we made a post request to /users
//   // i've installed postman, and no matter what method i pick (post, get etc.) i am receiving <h1>Hello</h1> from res.end()
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello</h1>");
// });

//creating server with simple router
// const server = http.createServer((req, res) => {
//   try {
//     //check if get request
//     if (req.method === "GET") {
//       if (req.url === "/") {
//         // we look at url and do something in each case
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Homepage</h1>");
//       } else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>About</h1>");
//       } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>Not found</h1>");
//       }
//     } else {
//       // else throw an error
//       throw new Error("Method not allowed");
//     }
//   } catch (error) {
//     //and if some other type of error happens
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Server error");
//   }
// });

/* 
lets use the fs module to serve html pages instead.
multiple ways to use fs module, with its readFile, writeFile methods
default async callback way & synchronous version, 
which means the rest of the program is stopped until it finished. 
Usually dont want to use this version. 
Use  when you want to write data to a file synchronously, meaning the 
program will pause until the file write operation is completed. 
This is useful when you need to ensure that the file is written 
before proceeding with the rest of the program.
 */
import fs from "fs/promises";
/* 
if we were using commonJS instead of es6 modules, we could say
const path = require('path');
which gives us access to __filename & __dirname variables which are very helpful.
they arent available using es6 modules however, so we have to 'make' our own.
*/
// to do it we also need to import the url module
import url from "url";
const __filename = url.fileURLToPath(import.meta.url); // logs C:\Users\jarja\Desktop\Web\repos\nodejs-crash-course\server.js
import path from "path";
const __dirname = path.dirname(__filename); // logs C:\Users\jarja\Desktop\Web\repos\nodejs-crash-course

const server = http.createServer(async (req, res) => {
  try {
    //check if get request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html"); //each argument becomes part of the file path,
        // so we end up at C:\Users\jarja\Desktop\Web\repos\nodejs-crash-course/public/index.html
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("404 Not found");
      }

      const data = await fs.readFile(filePath); // read the file
      res.setHeader("Content-Type", "text/html");
      res.write(data); // send it
      res.end();
      // if we now go to / or /about urls, we will see our html pages load, which are located in the public folder
    } else {
      // else throw an error
      throw new Error("Method not allowed");
    }
  } catch (error) {
    //and if some other type of error happens
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server error");
  }
});

// as it stands, this server variable isnt doing much, we need to listen to it.
server.listen(PORT, () => {
  console.log("server running on port: ", PORT);
}); // when we run server.js using node, the server will be running and can be found on a browser at: http://localhost:8000/
