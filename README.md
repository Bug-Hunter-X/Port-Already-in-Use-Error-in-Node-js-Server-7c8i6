# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js applications where attempting to start a server on a port that's already in use results in an unhandled exception.  The solution shows how to gracefully handle this situation using error handling and asynchronous operations.

## Bug

The `server.js` file shows a basic Node.js HTTP server that attempts to listen on port 8080. If this port is already occupied (by another process or a previous run of the same server), the server will fail to start and throw an error. This is because `server.listen` is a synchronous function which doesn't have a mechanism to gracefully handle this error.

## Solution

The `serverSolution.js` file provides a solution by using `server.listen`'s callback function to handle the 'EADDRINUSE' error. This makes the error handling asynchronous so it does not interrupt the execution of the rest of the code.  The solution includes logging to clearly inform the user about the error.