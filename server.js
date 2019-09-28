const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', express.static('static'));

app.post('/api/babytracker', function (req, res) {
    res.send('POST request to the homepage')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));