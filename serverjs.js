const http = require('http');

const hostname = 'localhost';
const port = 3000;

// Criando um recurso para receber e responder as requisições
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plan'});
  res.end("Olá, o servidor está no ar");
}).listen(port, hostname, () => {
  console.log(`O servidor está no ar em ${hostname}:${port}`);
})
