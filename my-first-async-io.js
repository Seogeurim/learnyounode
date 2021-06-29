const fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  if (err) return console.log(err);
  // fs.readFile(file, 'utf8', callback) -> data : String type, not Buffer object
  console.log(data.toString().split('\n').length - 1);
});
