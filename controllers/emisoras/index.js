const fs = require('fs');

module.exports = {
    get: (req, res) => {
        fs.readFile("./fixtures/emisoras.json", 'utf8', function (err, data) {
            if (err) throw err;
            let json = JSON.parse(data);
            res.json(json)
        });
    },

    getById: (req, res) => {
        fs.readFile("./fixtures/emisoras.json", 'utf8', function (err, data) {
            if (err) throw err;

            let json = JSON.parse(data);
            const emisora = json.data.find(e => e.id === req.params.id)
            if (emisora) {
                res.json(emisora);
            } else {
                res.status(404).end();
            }
        });
    }
}