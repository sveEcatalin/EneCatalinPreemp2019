var express = require("express");
var router = express.Router();
const {
  defaultProdController,
  getByIdProductsController
} = require("../controllers/products");

const {
  getProductsByIdSchema,
  validatePathParams
} = require("../middlewares/joiMW");

router.get("/", defaultProdController);

router.get(
  "/:id",
  validatePathParams(getProductsByIdSchema),
  getByIdProductsController
);

module.exports = router;
