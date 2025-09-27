const http = require('http')
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    console.log('Server levantado!!')
    res.writeHead(200, { 'Content-type': 'text/plain'})
    res.end('Hola desde el server con ejemplo USER');
}).listen(PORT);