const express = require('express');
const bodyParser = require('body-parser');

const Database = require('./db/db.js');

const app = express();
const port = 4000;

const db = new Database();
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`))