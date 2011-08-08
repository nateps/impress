var app, compile, exec, express, nib, port, stylus;
stylus = require('stylus');
express = require('express');
nib = require('nib');
exec = require('child_process').exec;
compile = function(str, path) {
  console.log(str, path);
  return stylus(str).set('filename', path).set('warn', true).use(nib());
};
app = express.createServer(stylus.middleware({
  src: __dirname + '/src',
  dest: __dirname + '/public',
  compile: compile
}), express.static(__dirname + '/public'), express.favicon());
exec("vogue --port 8002 --rewrite .css:.styl " + __dirname + "/src", function() {});
app.listen(port = 8001);
console.log("Go to http://localhost:" + port + "/");