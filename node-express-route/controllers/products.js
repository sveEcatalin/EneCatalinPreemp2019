const productsJSON = require("../items/products.json");
const productsObj = { data: productsJSON };

const defaultProdController = function(req, res) {
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
      })
      .pop();
    if (arr2 === undefined) {
      let myErr = { errors: [{ message: "no products found" }] };
      res.status(404).send(myErr);
    } else {
      res.json(arr2);
    }
  }
};

const getByIdProductsController = function(req, res) {
  if (productsObj.data[req.params.id - 1] !== undefined) {
    res.json(productsObj.data[req.params.id - 1]);
  } else {
    let myErr = { errors: [{ message: "no products found" }] };
    res.status(404).send(myErr);
  }
};

module.exports = { defaultProdController, getByIdProductsController };
