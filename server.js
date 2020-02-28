const http = require('http');

const server = http.createServer((req, res) => {
  res.write('hello');
  res.end();
});

const PORT = 4444;

server.listen(PORT, console.log(`hello port open ${PORT}`));
