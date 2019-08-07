const categoriesRoutes = require("./categories");
const productsRoutes = require("./products");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("hello world");
});

router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);

module.exports = router;
