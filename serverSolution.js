const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();

//This will handle port already in use error

const handleError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port or stop the existing server.`);
  } else {
    console.error(`An error occurred: ${err}`);
  }
};

//Adding error handling to handle uncaught exceptions

process.on('uncaughtException', handleError);
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.on('error', handleError); 