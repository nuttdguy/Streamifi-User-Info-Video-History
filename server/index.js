const express = require('express');
const db = require('../db/seed.js');

let app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.get('/streamers', function (req, res) {
    console.log('server is getting data');
    db.stream.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
});


let port = 3000
app.listen(port, () => {
    console.log(`server is working on port ${port}`)
});