var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res) {
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) throw e /*res.sendStatus(500)*/
     books = JSON.parse(data);
     /* catch (e) {
      res.sendStatus(500)
    }*/
    res.json(books);
  })
})

app.listen(process.argv[2])