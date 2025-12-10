const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => 
    console.log(req.url, req.method)
);

server.listen(8080, "localhost", () => {
  console.log("listening for requests on port 8080");
});