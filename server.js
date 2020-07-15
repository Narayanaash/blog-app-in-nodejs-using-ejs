const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(0, 20);
  console.log(num);
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
