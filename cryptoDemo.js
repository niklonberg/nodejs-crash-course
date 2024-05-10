/* 
this module provides cryptographic functionality, 
you can create hashes (so if you want to hash passwords)
you can create random hexadecimal strings,
you can encrypt and decrypt data
*/

import crypto from "crypto";

// createHash()
const hash = crypto.createHash("sha256"); // takes in the crypto algorithm you want to use, sha256 is common one
hash.update("password1234");
console.log(hash.digest("hex")); //logs b9c950640e1b3740e98acb93e669c65766f6670dd1609ba91ff41052ba48c6f3
// so we could use the above to hash passwords before storing them in a database fx.

// randomBytes()
// you might want to generate cryptographically strong hexadecimal strings too
crypto.randomBytes(16, (error, buffer) => {
  if (error) throw error;
  console.log(buffer.toString("hex")); //logs something different each time like c865d3150a313adf929bfcc7bdb26752
  // could be used to generate user ids
});

// createCipheriv & createDecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(
  "Hello, this is a secret message",
  "utf-8",
  "hex"
);
encrypted += cipher.final("hex");
console.log("encrypted message: ", encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf8");
console.log("decrypted message: ", decrypted);
