var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var textData = fs.readFileSync('index.html');
  var bufTextData = textData.toString();
  response.send(bufTextData);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
