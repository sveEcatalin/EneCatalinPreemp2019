var express = require("express");
var router = express.Router();
const productsJSON = require("../items/products.json");
const productsObj = { data: productsJSON };

router.get("/", function(req, res) {
  if (Object.keys(req.query).length === 0) {
    res.send(productsObj);
  }
  if (
    Object.keys(req.query).length === 2 &&
    req.query.category &&
    req.query.manufacturer
  ) {
    const arr2 = productsJSON
      .filter((product, index) => {
        return (
          product.ManufacturerId === parseInt(req.query.manufacturer) &&
          product.categories.includes(parseInt(req.query.category))
        );
        console.log("InFilter", product.categories);
      })
      .pop();
    if (arr2 === undefined) {
      let myErr = { errors: [{ message: "no products found" }] };
      res.status(404).send(myErr);
    } else {
      res.json(arr2);
    }
  }
});

router.get("/:id", function(req, res) {
  console.log("HHHHHHHHARRRRRRR", productsObj.data[req.params.id - 1]);
  if (productsObj.data[req.params.id - 1] !== undefined) {
    res.json(productsObj.data[req.params.id - 1]);
  } else {
    let myErr = { errors: [{ message: "no products found" }] };
    res.status(404).send(myErr);
  }
});

module.exports = router;
