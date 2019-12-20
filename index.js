const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const generateFiles = require('./generate');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.post('/generate', function (req, res) {
    generateFiles(req.body.amount, req.body.filename)
    res.send('POST request to the homepage')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
