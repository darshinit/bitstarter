var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  data.toString('utf-8');
});

