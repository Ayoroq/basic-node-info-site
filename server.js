const http = require("http");

const server = http.createServer((req, res) => console.log("request made"));

server.listen(8080, "localhost", () => {
  console.log("listening for requests on port 8080");
});