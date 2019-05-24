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


// Vegetable
app.get('/api/vegetable', (req, res) => {
    const property = Object.keys(req.query)[0];
    if (!property) {
        res.status(400);
        res.send({'error': 'No property specified'})
    } else {
        const vegetable = db.findVegetableByProperty(req.query[property], property);
        res.status(200);
        res.send(vegetable || {})
    }
});

app.delete('/api/vegetable', (req, res) => {
    const property = Object.keys(req.body)[0];
    console.log(property);
    if (!property) {
        res.status(400);
        res.send({'error': 'No property specified'})
    } else {
        const removedVegetable = db.removeVegetableByProperty(req.body[property], property);
        res.status(200);
        res.send(removedVegetable);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
