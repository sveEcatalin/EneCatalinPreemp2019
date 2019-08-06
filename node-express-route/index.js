const express = require("express");
const app = express();
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");

// console.log("The categories are", categoriesJSON);
// console.log("The products are", productsJSON);

app.get("/", function(req, res) {
  res.send("hello world");
});

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

app.listen(5000);
