var express = require('express');
var app = express();
app.use(express.logger());

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  var buffer = new Buffer(50);
  buffer.write(data, "utf-8");
  buffer.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
