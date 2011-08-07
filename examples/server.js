var app, express, fs, nib, port, stylus, util;
stylus = require('stylus');
express = require('express');
nib = require('nib');
fs = require('fs');
util = require('util');
app = express.createServer(express.static(__dirname + '/public'), express.favicon());
app.get('/style.css', function(req, res) {
  return fs.readFile("" + __dirname + "/../src/style.css", 'utf8', function(err, styl) {
    if (err) {
      console.error(util.inspect(err));
      return res.send('', {
        'Content-Type': 'text/css'
      });
    }
    return stylus(styl).use(nib()).render(function(err, css) {
      if (err) {
        console.error(err.stack);
      }
      return res.send(css, {
        'Content-Type': 'text/css'
      });
    });
  });
});
app.listen(port = 8001);
console.log("Go to http://localhost:" + port + "/basic.html");