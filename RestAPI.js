const http = require('http');

const server = http.createServer((req, res) => {
  const todos = [
    { id: 1, text: 'text1' },
    { id: 2, text: 'text2' },
    { id: 3, text: 'text3' }
  ];
  const { method, url } = req;
  let body = [];
  req
    .on('data', chank => {
      body.push(chank);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      let status = 404;
      const response = {
        success: false,
        data: todos,
        error: null
      };

      if (method === 'GET' && url === '/todos') {
        status = 200;
        response.success = true;
        response.data = todos;
      } else if (method === 'POST' && url === '/todos') {
        const { id, text } = JSON.parse(body);
        if (!id || !text) {
          status = 400;
          response.error = 'please add id';
        } else {
          todos.push({ id, text });
          status = 201;
          response.success = true;
          response.data = todos;
        }
      }

      res.writeHead(200, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'node'
      });

      res.end(JSON.stringify(response));
    });
});

const PORT = 5000;
server.listen(PORT, console.log(`RESTAPI work ${PORT}`));
