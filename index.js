"use strict";
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const calculator = require('./calculator');

app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname });
});

app.post('/calculate', calculator.getMonthlyWithdraw);

app.listen(8081, () => {
    console.log("listening to port 8081");
});