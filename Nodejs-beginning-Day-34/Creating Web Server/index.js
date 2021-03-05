const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("This is home page.");
  } else if (req.url == "/about") {
    res.end("This is about us page.");
  } else if (req.url == "/contact") {
    res.end("This is contact us page.");
  } else {
    res.writeHead(404, { Content: "text/html" });
    res.end("Not Found !");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port : 8000");
});
