var express = require('express');
 
var app = express();
 
app.get('/', function(req, resp) {
  resp.send('hello world');
});
 
app.listen(process.env.PORT || 5000);

module.exports = app;
