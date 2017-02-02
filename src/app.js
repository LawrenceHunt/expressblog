'use strict';
var express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send("Helloooooo!");
  app.done()
})

app.listen(3000);
