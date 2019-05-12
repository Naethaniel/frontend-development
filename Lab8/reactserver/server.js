const express = require('express');
const bodyParser = require('body-parser');

const Database = require('./db/db.js');

const app = express();
const port = 4000;
const db = new Database();
app.use(bodyParser.json());

app.get('/api/vegetables', (req, res) => {
    res.send({vegetables: db._db});
})

app.post('/api/vegetables', (req, res) => {
    db.addVegetable(req.body);
    res.status(201);
    res.send(request.body)
})

app.listen(port, () => console.log(`Listening on port ${port}`))