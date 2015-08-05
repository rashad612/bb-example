'use strict';

var express = require('express');
var app = express();

app.use(express.static('vendor'));
app.use(express.static('lib'));
app.use(express.static('public'));

app.listen(9000, function() {
  console.log('Backbone server is running!');
});