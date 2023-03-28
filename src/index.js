var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! Ura ya to zapustil');
});
app.listen(80, function () {
  console.log('App is running on port 80');
});