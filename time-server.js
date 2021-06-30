const net = require('net');

function zeroFill(date) {
  return ('0' + date).slice(-2);
}

function printCurrentTime() {
  const date = new Date();

  const year = date.getFullYear();
  const month = zeroFill(1 + date.getMonth());
  const day = zeroFill(date.getDate());
  const hour = zeroFill(date.getHours());
  const min = zeroFill(date.getMinutes());

  return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
}

const server = net
  .createServer(function (socket) {
    socket.write(printCurrentTime() + '\n');
    socket.end();
    // simplify : socket.end(data)
  })
  .on('error', console.error);

server.listen(process.argv[2]);
