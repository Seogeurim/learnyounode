const fs = require('fs');

const file_buffer = fs.readFileSync(process.argv[2]);
const str = file_buffer.toString();
// fs.readFileSync(process.argv[2], 'utf8') -> returns String, not Buffer object

console.log(str.split('\n').length - 1);
