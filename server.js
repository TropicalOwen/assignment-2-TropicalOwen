const express = require('express');

const Datastore = require('nedb');

const app = express();

app.listen(3000, () => console.log('listening at 3000'))

app.use(express.static('public'));

app.use(express.json())

const db = new Datastore("./en_US.db");
db.loadDatabase();