var fs = require('fs'),
    optimist = require('optimist').usage('Usage: $0 <file>');

module.exports = function readit() {

  var path, content;

  if(!optimist.argv._.length) {
    optimist.showHelp();
    process.exit(1);
  }
  path = optimist.argv._.pop();

  try {
    content = fs.readFileSync(path).toString();
  } catch(e) {
    console.error("couldn't read %s", path);
    process.exit(1);
  }

  return content;
};
