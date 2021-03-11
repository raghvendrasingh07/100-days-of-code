const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const api = fs.readFileSync(`${__dirname}/users.json`);

  if (req.url == "/") {
    res.end("This is home page.");
  } else if (req.url == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(api);
    // fs.readFile(`${__dirname}/users.json`, "utf-8", (err, data) => {
    //     res.end(data);
    //   const name = JSON.parse(data);
    //   res.end(api);
    // });
  } else {
    res.writeHead(404, { Content: "text/html" });
    res.end("Not Found !");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port : 8000");
});
