import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'; //simulate a search on google

// URL object
const urlObj = new URL(urlString)
console.log(urlObj)
/* logs
URL {
  href: 'https://www.google.com/search?q=hello+world',
  origin: 'https://www.google.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.google.com',
  hostname: 'www.google.com',
  port: '',
  pathname: '/search',
  search: '?q=hello+world',
  searchParams: URLSearchParams { 'q' => 'hello world' },
  hash: ''
}
*/
console.log(urlObj.protocol) //and we can access different parts

// format() - is used to serialize a URL object back into a URL string
console.log(url.format(urlObj)) // logs 'https://www.google.com/search?q=hello+world'

// import.meta.url - import.meta provides some metadata about the current module
console.log(import.meta.url) //logs file:///C:/Users/jarja/Desktop/Web/repos/nodejs-crash-course/urlDemo.js

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url))


//how we can get the search/query params
console.log(urlObj.search) // ?q=hello+world, q is the key, hello+world is the value
const params = new URLSearchParams(urlObj.search)
console.log(params) // logs URLSearchParams { 'q' => 'hello world' }
console.log(params.get('q')) // gets us the value hello world
// we can append to params
params.append('limit', '5')
console.log(params) // URLSearchParams { 'q' => 'hello world', 'limit' => '5' }
// we can delete from params
params.delete('limit')