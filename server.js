const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json());

var storedEvents = [];

// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', express.static('static'));

app.post('/api/babytracker', function (req, res) {
    res.send('POST request to the homepage');
    storedEvents.push(req.body.type);
    console.log(storedEvents);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));