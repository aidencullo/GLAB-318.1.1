const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/goodbye') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: blue">Goodbye World!</h1>');
    res.write('<p>Thanks for visiting!</p>');
    res.end();
    return;
  } else if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
    return;
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">404 Not Found</h1>');
    res.write('<p>Sorry, we can\'t find that page.</p>');
    res.end();
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
