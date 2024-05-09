//this will be the new entry point for this application
import http from "http"; // <-- this import looks a little different, because we are importing something that is included with nodejs
// const PORT = 8000; // <-- we will use process.env variables for this later
const PORT = process.env.PORT;

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
//   // res.end("<h1>Hello, World!</h1>");
//   res.writeHead(200, { "Content-Type": "text/html" });

//   res.end("<h1>Hello</h1>");
// });

//create server
const server = http.createServer((req, res) => {
  // we can also use the req object, lets log it
  console.log(req.url); // logs '/' if on http://localhost:8087/
  console.log(req.method); // logs GET

  // unfortunately, no matter what method or url we use, we are giving the same response back
  // when you dont use a framework like express, you need to manually check the url
  // in express you could do 
  // app.post('/users', () => {}) whatever we put inside the function would only run when we made a post request to /users

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello</h1>");
});



// as it stands, this server variable isnt doing much, we need to listen to it.
server.listen(PORT, () => {
  console.log("server running on port: ", PORT);
}); // when we run server.js using node, the server will be running and can be found on a browser at: http://localhost:8000/
