const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json());

var storedEvents = [];

// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', express.static('static'));

app.post('/api/babytracker', function (req, res) {
    var event = { time: new Date(), type: req.body.type }
    storedEvents.push(event);
    console.log(storedEvents);
    res.send(storedEvents);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));