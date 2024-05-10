import { EventEmitter } from "events";
// great for realtime apps, you can create custom events and listen for them
// can also listen for built-in events

const myEmitter = new EventEmitter();

// function greetHandler() {
//   console.log('Hello world')
// }

// function goodbyeHandler() {
//   console.log('Goodbye world')
// }

// on method is used to register event listeners

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
// myEmitter.emit('greet')
// myEmitter.emit('goodbye')

// we can pass values to emit
function greetHandler(name) {
  console.log(`Hello ${name}`);
}

function goodbyeHandler(name) {
  console.log(`Goodbye ${name}`);
}

myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");

// Error handling - makes a stack trace for you
myEmitter.on("error", (err) => {
  console.log("An error occured", err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
