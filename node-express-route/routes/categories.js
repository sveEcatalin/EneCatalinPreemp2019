var express = require("express");
var router = express.Router();
const {
  defaultCategoriesController,
  productsFromCategoryController
} = require("../controllers/categories");

router.get("/", defaultCategoriesController);

router.get("/:id/products", productsFromCategoryController);

module.exports = router;
