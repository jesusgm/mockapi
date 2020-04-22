var express = require("express");
var cors = require('cors')
var app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))


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
 * Emisoras de radio
 */
const emisorasController = require("./controllers/emisoras/");
app.get("/emisoras", emisorasController.get);
app.get("/emisoras/:id", emisorasController.getById);

/**
 * Run app
 */
const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});