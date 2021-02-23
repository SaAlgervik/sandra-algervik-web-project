const express = require('express');
const app = express();
var path = require('path');
const axios = require('axios');

var port = process.env.PORT || 3000;
let APIKey = 'UNtHDVWT5IrPmEf_BU3e6tjfn5Pivp_ivbt2MSWIETs';

// Express Middleware for serving static files
app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/getcommon_name', function (req, res) {
    axios
        .get(`https://trefle.io/api/v1/plants/search?token=${APIKey}&q=${req.query.inputText}&format=json`)
        .then(response => {
            res.send(response.data)

        })
        .catch((error) => {
            console.log(error)

        });
});

app.listen(port, function () {
    console.log('Gator app listening on port!' + port)
});