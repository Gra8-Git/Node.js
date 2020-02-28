const http = require('http');

const todos = [
  { id: 1, text: 'message1' },
  { id: 2, text: 'message2' }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'X-Powered-By': 'node.js'
  });

  let body = [];
  req
    .on('data', chank => {
      body.push(chank);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  console.log(req.headers.authorization);

  res.end(
    JSON.stringify({
      saccess: true,
      data: todos
    })
  );
});

const PORT = 6666;
server.listen(PORT, console.log(`hello ${PORT}`));
