const posts = [
  // <-- hard coded posts, these would come from a database
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post one" },
];

//export const getPosts = () => posts; // <-- Module style export of singular thing

// we could also export like this:

/* 
  export { getPosts };
  or
  export default getPosts;
*/

// or do a mix of default and nondefault export
const getPosts = () => posts;
export const getPostsLength = () => posts.length;

export default getPosts;
