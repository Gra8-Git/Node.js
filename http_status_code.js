const http = require('http');

const todos = [
  { id: 1, text: 'message1' },
  { id: 2, text: 'message2' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Powered-By', 'sergey');
  res.write('hello');
  res.writeHead(headers, url);

  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  );
});

const PORT = 5555;

server.listen(PORT, console.log(`hello from port ${PORT}`));
