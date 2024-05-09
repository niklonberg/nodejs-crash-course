//this will be the new entry point for this application
import http from 'http'; // <-- this import looks a little different, because we are importing something that is included with nodejs
const PORT = 8000 // <-- we will use process.env variables for this later

//create server
const server = http.createServer((req, res)=> { // we use the createServer method which takes a function, (does not need to be an arrow function)
  //it has two default arguments, req (request), res (response)
  res.write('Hello from nodejs server')
  res.end();
})
// as it stands, this server variable isnt doing much, we need to listen to it.
server.listen(PORT, () => {
  console.log('server running on port: ', PORT)
}); // when we run server.js using node, the server will be running and can be found on a browser at: http://localhost:8000/