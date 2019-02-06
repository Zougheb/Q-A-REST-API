"use strict";

var express = require('express');
var app = express();
var routes = require('./routes');
const bodyParser = require("body-parser");
var logger = require('morgan');
var db = require('./models')


app.use(logger("dev"));
app.use(bodyParser.json());
app.use('/questions',routes);

app.use(function (req, res, next) {
    req.body;
    next();
});


var port = process.env.PORT|| 8080;
app.listen(port,()=> {
    console.log("server started on port 8080");
});