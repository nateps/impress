stylus = require 'stylus'
express = require 'express'
nib = require 'nib'
fs = require 'fs'
util = require 'util'

app = express.createServer(
  express.static(__dirname + '/public'),
  express.favicon()
)

app.get '/style.css', (req, res) ->
  fs.readFile "#{__dirname}/../src/style.css", 'utf8', (err, styl) ->
    if err
      console.error util.inspect err
      return res.send '', 'Content-Type': 'text/css'
    stylus(styl).use(nib()).render (err, css) ->
      console.error err.stack if err
      res.send css, 'Content-Type': 'text/css'

app.listen port = 8001
console.log "Go to http://localhost:#{port}/basic.html"