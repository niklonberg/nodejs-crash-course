// import fs from "fs";

// // readFile() - callback async version
// fs.readFile("./testfile.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // readFileSync() - sync version
// // easier to write, but its blocking, so if its a giant
// // file everything will hang for some time while its working
// const data = fs.readFileSync('./testfile.txt', 'utf-8')
// console.log(data)

// we also have promise based version
import fs from "fs/promises";

// readFile - Promise .then
// fs.readFile("./testfile.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile - Async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./testfile.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// readFile();

// writeFile, also has the different version, we will stick with async/await
const writeFile = async () => {
  try {
    await fs.writeFile("./testfile.txt", "Hello i am writing to this file"); // this will write to, and overwrite what was in the file before
    console.log("File written to..");
  } catch (error) {
    console.log(error);
  }
};

// appendFile() - to add to a file without deleting previous content
const appendFile = async () => {
  try {
    await fs.appendFile("testfile.txt", "\nThis is new text appended");
    console.log("File appended to");
  } catch (error) {
    console.log(error);
  }
};
writeFile();
appendFile();
readFile();
