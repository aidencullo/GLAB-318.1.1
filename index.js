const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/goodbye') {
    sayGoodbye(res);
  } else if (req.url === '/') {
    sayHello(res);
  } else if (req.url === '/secret') {
    accessSecretFile(res);
  } else {
    notFound(res);
  }
});

const sayGoodbye = (res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: blue">Goodbye World!</h1>');
  res.write('<p>Thanks for visiting!</p>');
  res.end();
};

const sayHello = (res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: green">Hello World!</h1>');
  res.write('<p>Welcome to my website!</p>');
  res.end();
};

const notFound = (res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: red">404 Not Found</h1>');
  res.write('<p>Sorry, the page you are looking for is not here.</p>');
  res.end();
};

const accessSecretFile = (res) => {
  res.statusCode = 403;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: red">403 Forbidden</h1>');
  res.write('<p>Sorry, you do not have permission to access this page.</p>');
  res.end();
};

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
