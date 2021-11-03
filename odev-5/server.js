const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Index Sayfasi</h1>");
      break;
    case "/about":
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>About Sayfasi</h1>");
      break;
    case "/contact":
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Contact Sayfasi</h1>");
      break;
    default:
      res.writeHead(404, {"Content-Type" : "text/html"});
      res.write("<h1>Aranan Sayfa Bulunamadi</h1>");
  }
  res.end();
});

server.listen(port, ()=>{
  console.log(`Sunucuya ${port} undan başarıyla bağlanıldı.`);
})
