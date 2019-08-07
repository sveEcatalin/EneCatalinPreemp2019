const express = require("express");
const app = express();

const routes = require("./routes/routes");

// const errorHandler = require("./errorHandlers/errorHandler");

// app.use(errorHandler);

app.use("/", routes);

// https
//   .createServer(
//     {
//       key: fs.readFileSync("server.key"),
//       cert: fs.readFileSync("server.cert")
//     },
//     app
//   )
//   .listen(5000);

module.exports = app;
