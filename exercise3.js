const express = require('express')
    const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.get('/home', function(req, res) {
    res.render(process.argv[3], {date: new Date().toDateString()})
    res.render
});
app.listen(process.argv[2]);