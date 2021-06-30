const http = require('http');
const bl = require('bl');

const result = [];
let cnt = 0;

for (let i = 0; i < 3; i++) {
  http
    .get(process.argv[2 + i], function (response) {
      response.pipe(
        bl(function (err, data) {
          if (err) return console.error(err);

          result[i] = data.toString();
          cnt++;

          if (cnt == 3) {
            for (let i = 0; i < 3; i++) console.log(result[i]);
          }
        })
      );
    })
    .on('error', console.error);
}
