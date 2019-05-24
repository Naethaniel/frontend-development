const express = require('express');
const bodyParser = require('body-parser');

const Database = require('./db/db.js');

const app = express();
const port = 4000;
const db = new Database();
app.use(bodyParser.json());


// Vegetables
app.get('/api/vegetables', (req, res) => {
    const property = Object.keys(req.query)[0];
    if (!property) {
        res.status(200);
        res.send({vegetables: db._db});
    } else {
        const vegetables = db.findVegetablesByProperty(req.query[property], property);
        res.status(200);
        res.send({vegetables})
    }
});

app.post('/api/vegetables', (req, res) => {
    db.addVegetable(req.body);
    res.status(201);
    res.send(req.body)
});


app.listen(port, () => console.log(`Listening on port ${port}`))