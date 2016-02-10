var express = require("express");
var app = express()
var expressHandlebars = require('express-handlebars')
var router = require("router");
var burgers = require("burgers.js")

var PORT = 8000;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

ROUTES

app.listen(PORT, function(){
  console.log("App is listening to %s", PORT);
});
