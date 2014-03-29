var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(1337, function() {
    console.log("This ya boy EXPRESS and I'm listening on port ", server.address().port);
});