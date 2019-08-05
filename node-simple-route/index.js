//include the http and url module
const http = require("http");
const url = require("url");
const fs = require("fs");

//create the http server accepting requests to port 3333
http
  .createServer(function(req, res) {
    res.setHeader(
      "Acess-Control-Allow-Origin",
      "*",
      "content-type",
      "application/json"
    );

    //get url infomation
    var urlParts = url.parse(req.url);

    //direct the request to appropriate function to be processed based on the url pathname
    if (/[\/]categories[\/]?/.test(urlParts.pathname)) {
      return categories(req, res);
    }

    if (urlParts.pathname === "/products/") {
      return products(req, res);
    }

    if (/([\/]products[\/][0-9]+)/.test(urlParts.pathname)) {
      return myProd(req, res);
    }
  })
  .listen(3333);
console.log("Server running at http://localhost:3333/");

function categories(req, res) {
  fs.readFile(`./items/categories.json`, "utf8", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
}

function products(req, res) {
  fs.readFile(`./items/products.json`, (err, data) => {
    if (err) throw err;
    const myData = JSON.parse(data);

    let firstTen = myData.slice(0, 10);
    const stringyObj = JSON.stringify(firstTen);

    res.end(stringyObj);
  });
}

function myProd(req, res) {
  let myArg = req.url;
  var numb = myArg.match(/\d/g);
  numb = numb.join("");
  fs.readFile(`./items/products.json`, "utf8", (err, data) => {
    const myData = JSON.parse(data);
    var found = myData.filter(function(el) {
      return el.id === parseInt(numb);
    });

    const stringyObj = JSON.stringify(found);

    // const found = myData.filter(myData.id === 1);
    res.end(stringyObj);
  });
}
