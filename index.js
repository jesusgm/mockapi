var express = require("express");
var app = express();


app.get("/", function (req, res) {
    res.send("hello world");
});

/**
 * Products endpoints
 */
const productsController = require("./controllers/products/")
app.get("/products", productsController.get);
app.get("/products/:id", productsController.getById);


/**
 * Run app
 */
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});