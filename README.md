# readit

I found myself writing the same small boilerplate code over and over:

- expect the first argument to a node script to be a file path
- if so, read it contents and do something with it

## Example

```javascript
// cat.js
var readit = require('readit');
var contents = readit();
console.log(contents);
```

And we use this as such:

```
$ node cat.js
Usage: /opt/boxen/nvm/v0.8.8/bin/node ./cat.js <file>

$ node cat.js dog.js
couldn't read dog.js

$ node cat.js cat.js
// cat.js
var readit = require('readit');
var fileContents = readit();
console.log(contents);
```

