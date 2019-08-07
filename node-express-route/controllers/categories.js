const categoriesJSON = require("../items/categories.json");
const categoriesObj = { data: categoriesJSON };

const productsJSON = require("../items/products.json");
const productsObj = { data: productsJSON };

const defaultCategoriesController = function(req, res) {
  res.json(categoriesObj);
};

const productsFromCategoryController = function(req, res) {
  let myCatProductsArr = [];

  for (let i = 0; i < productsObj.data.length; i++) {
    if (productsObj.data[i].categories.includes(parseInt(req.params.id))) {
      myCatProductsArr.push(productsObj.data[i].name);
    }
  }
  let myCategoryProductsObj = { data: myCatProductsArr };
  if (myCatProductsArr.length === 0) {
    let myErr = { errors: [{ message: "no products found" }] };
    res.status(404).send(myErr);
  } else {
    res.json(myCategoryProductsObj);
  } //   console.log("HERE", myCatProducts);
};

module.exports = {
  defaultCategoriesController,
  productsFromCategoryController
};
