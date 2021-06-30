const http = require('http');

const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
  if (req.method !== 'GET') res.end();

  const url = new URL(req.url, `http://localhost:${port}`);
  const iso = url.searchParams.get('iso');
  const date = new Date(iso);

  let result;
  if (url.pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else if (url.pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime(),
    };
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
