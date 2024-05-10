// building a simple api

// import { createServer } from "http";
// const PORT = process.env.PORT;

// const users = [
//   // <-- hard coded posts, these would come from a database
//   { id: 1, name: "John Doe" },
//   { id: 2, title: "Jane Boe" },
//   { id: 3, title: "Jim Foe" },
// ];

// const server = createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   if (req.url === "/api/users" && req.method === "GET") {
//     res.write(JSON.stringify(users));
//     res.end();
//     // if we wanted to get a specific user we would do this else if below
//     // (in express we would do /api/url/:id <-- where :id is dynamic)
//   } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
//     const id = req.url.split("/")[3]; //split url on each /, get last part
//     console.log("id is: ", id);
//     const user = users.find((user) => user.id === parseInt(id));
//     if (user) {
//       res.write(JSON.stringify(user));
//     } else {
//       res.statusCode = 404;
//       res.write(JSON.stringify({ message: "User not found" }));
//     }
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.write(JSON.stringify({ message: "Route not found" }));
//     res.end();
//   }
// });

// server.listen(PORT, () => {
//   console.log("server running on port: ", PORT);
//   console.log("server 2 running");
// });

/* Middleware
middleware are basically modules or functions that 
have access to the request or response object, they sit in the middle
of incoming requests and outgoing responses
They sit "in the middle" of the request-response cycle, hence the term "middleware
They can perform basically any code that you want, you can also make changes
to the request and response objects (you could add a values to them for example) 
Fx. with authentication middleware, a lot of times you would end up with a
res.user - which would have info on the current user*/

// // building a simple api
// // with an example logger middleware
// import { createServer } from "http";
// const PORT = process.env.PORT;

// const users = [
//   // <-- hard coded posts, these would come from a database
//   { id: 1, name: "John Doe" },
//   { id: 2, title: "Jane Boe" },
//   { id: 3, title: "Jim Foe" },
// ];

// // our previous const server = createServer was very messy, lets split things up

// // Logger middleware <-- you would import this from another file normally
// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// // JSON middleware
// const jsonMiddleware = (req, res, next) => {
//   res.setHeader("Content-Type", "application/json");
//   next();
// };

// // Route handler for GET /api/users
// const getUsersHandler = (req, res) => {
//   res.write(JSON.stringify(users));
//   res.end();
// };

// // Route handler for GET /api/users/:id
// const getUserByIdHandler = (req, res) => {
//   const id = req.url.split("/")[3]; //split url on each /, get last part
//   const user = users.find((user) => user.id === parseInt(id));

//   if (user) {
//     res.write(JSON.stringify(user));
//   } else {
//     res.statusCode = 404;
//     res.write(JSON.stringify({ message: "User not found" }));
//   }
//   res.end();
// };

// // Route handler for not found
// const notFoundHandler = (req, res) => {
//   res.statusCode = 404;
//   res.write(JSON.stringify({ message: "Route not found" }));
//   res.end();
// };

// const server = createServer((req, res) => {
//   //middleware wraps everything
//   logger(req, res, () => {
//     jsonMiddleware(req, res, () => {
//       if (req.url === "/api/users" && req.method === "GET") {
//         getUsersHandler(req, res);
//       } else if (
//         req.url.match(/\/api\/users\/([0-9]+)/) &&
//         req.method === "GET"
//       ) {
//         getUserByIdHandler(req, res);
//       } else {
//         notFoundHandler(req, res);
//       }
//     });
//   }); // and jsonMiddleware sets our header
//   //now whenever we make any request, we see the method and url logged in console
// });

// server.listen(PORT, () => {
//   console.log("server running on port: ", PORT);
//   console.log("server 2 running");
// });

/* adding post methods (creating data) */
// building a simple api
// with an example logger middleware
import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  // <-- hard coded posts, these would come from a database
  { id: 1, name: "John Doe" },
  { id: 2, title: "Jane Boe" },
  { id: 3, title: "Jim Foe" },
];

// Logger middleware <-- you would import this from another file normally
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3]; //split url on each /, get last part
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
  // in express, you could get the body (whats being sent) easily
  // with req.body
  // with basic node, we do the following

  let body = "";
  // Listen for data
  req.on("data", (chunk) => {
    //on 'data' event
    body += chunk.toString(); //add chunk to body
  });
  req.on("end", () => {
    //on 'end' event
    const newUser = JSON.parse(body); //parse json into regular js object
    users.push(newUser); // push it on users in memory (real life it would be stored in database)
    res.statusCode = 201; // success and something created
    res.write(JSON.stringify(newUser)); // parse js object in json
    res.end();
  });
};

// Route handler for not found
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

const server = createServer((req, res) => {
  //middleware wraps everything
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  }); // and jsonMiddleware sets our header
  //now whenever we make any request, we see the method and url logged in console
});

server.listen(PORT, () => {
  console.log("server running on port: ", PORT);
  console.log("server 2 running");
});
