const fs = require('fs');

module.exports = {
    get: (req, res) => {
        fs.readFile("./fixtures/products.json", 'utf8', function (err, data) {
            if (err) throw err;
            let json = JSON.parse(data);
            res.json(json)
        });
    },

    getById: (req, res) => {
        fs.readFile("./fixtures/products.json", 'utf8', function (err, data) {
            if (err) throw err;
            let json = JSON.parse(data);
            const product = json.find(p => p.id === parseInt(req.params.id, 10))
            if (product) {
                res.json(product);
            } else {
                res.status(404).end();
            }
        });
    }
}