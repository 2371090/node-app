
const http = require('http');
const server = http.createServer((_, res) => res.end('Hello CI/CD'));
server.listen(3000, () => console.log('listening on 3000'));
