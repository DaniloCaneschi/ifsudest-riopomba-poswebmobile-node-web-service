const http = require('http');
const url = require('url'); // resolvedor de urls para json
const fs = require('fs'); // gerenciar arquivos
const path = require('path'); // gerenciar path(locais de arquivos, etc)

const servidor = 'localhost';
const porta = 3000;

const mimeTypes = {
  html: "text/html",
  json: "application/json",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  woff: "font/woof"
};

// Criando um recurso para receber e responder as requisições
var app = http.createServer((req, res) => {
      let uri = url.parse(req.url).pathname;
      let caminhoCompletoRecurso = path.join(process.cwd(), decodeURI(uri));

      let recurso;
      try {
        recurso = fs.lstatSync(caminhoCompletoRecurso);
      } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(`Recurso ${uri} não encontrado.`);
        return;
      }

      let extensao = path.extname(caminhoCompletoRecurso).substring(1);

      if (mimeTypes.hasOwnProperty(extensao)) {
        if (recurso.isFile()) {
          res.writeHead(200, mimeTypes[extensao]);
          let fluxoRecurso = fs.createReadStream(caminhoCompletoRecurso);
          fluxoRecurso.pipe(res);
        } else if (recurso.isDirectory()) {
          res.writeHead(302, {'Location': 'index.html'});
          res.end();
        } else {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Erro interno no servidor');
        }
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(`Formato do Recurso ${uri} inválido`);
      }
    }
);

app.listen(porta, servidor, () => {
  console.log(`O servidor está no ar em ${servidor}:${porta}`);
});
