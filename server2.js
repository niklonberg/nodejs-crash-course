// building a simple api

import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  // <-- hard coded posts, these would come from a database
  { id: 1, name: "John Doe" },
  { id: 2, title: "Jane Boe" },
  { id: 3, title: "Jim Foe" },
];

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/api/users" && req.method === "GET") {
    res.write(JSON.stringify(users));
    res.end();
    // if we wanted to get a specific user we would do this else if below
    // (in express we would do /api/url/:id <-- where :id is dynamic)
  } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3]; //split url on each /, get last part
    console.log("id is: ", id);
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
    }
    res.end();
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("server running on port: ", PORT);
  console.log("server 2 running");
});
