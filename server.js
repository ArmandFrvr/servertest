let http = require('http');

const PORT1 = 7000;
const PORT2 = 7500;

goodRequest = (request, response) => {
    response.end("You are awesome!" + request.url);
}

badRequest = (request, response) => {
    response.end("You suck!" + request.url);
}

// here we use node http package to create our sever
// handleRequest to use functionality
let server1 = http.createServer(goodRequest);
let server2 = http.createServer(badRequest);

server1.listen(PORT1, () => {
    console.log(`Server listening on http://localhost:${PORT1}`);
})

server2.listen(PORT2, () => {
    console.log(`Server listening on http://localhost:${PORT2}`);
})