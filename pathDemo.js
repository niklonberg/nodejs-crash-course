import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt"; // not a real location, but we can show the different utilities available

// basename() gets the basename
console.log(path.basename(filePath)); //logs test.txt

// dirname() gets the directory
console.log(path.dirname(filePath)); //logs ./dir1/dir2

// extname() gets the extension
console.log(path.extname(filePath)); //logs .txt

// parse()
console.log(path.parse(filePath));
/* logs 
{
  root: '',
  dir: './dir1/dir2',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
*/

// if using commonjs we have access to __filename & __dirname by default (or something like that)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join() used for creating paths for different operating systems
//linux path user/niks
//windows path user\niks
const filePath2 = path.join(__dirname, "dir1", "dir2", "testJoin.txt");
console.log(filePath2); //logs C:\Users\jarja\Desktop\Web\repos\nodejs-crash-course\dir1\dir2\testJoin.txt - had i been on linux or mac, the \ would be /

// resolve() - kinda like join but it is always an absolute path
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "testJoin.txt");
console.log(filePath3);
