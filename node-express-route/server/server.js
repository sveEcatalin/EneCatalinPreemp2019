const app = require("../index");

const fs = require("fs");

const https = require("https");

https
  .createServer(
    {
      key: fs.readFileSync("../server.key"),
      cert: fs.readFileSync("../server.cert")
    },
    app
  )
  .listen(5000);
