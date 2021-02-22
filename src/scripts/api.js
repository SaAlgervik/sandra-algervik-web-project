// const http = require('http');
// const port = 3000;

// const server = http.createServer(function(req, res){
    
// })


// server.listen(port,function(error){
//     if(error){
//        console.log('wrong', error) 
//     }else{
//         console.log('nice!'+ port)
//     }
    

// })

// const express = require('express')
// const app = express();
// var path = require('path')
// var port = process.env.PORT || 8080;

// let APIkey = 'UNtHDVWT5IrPmEf_BU3e6tjfn5Pivp_ivbt2MSWIETs';

// const axios = require('axios');

// //Express middeware for server static files
// app.use(express.static(path.join(__dirname, 'public')));

// // viewed at localhost:8080
// app.get('/',function(req, res) {
// res.sendFile(path.join(__dirname + 'index.html'));

// });

// app.get('/getFlowerID', function(req, res){
//     axios.get("https://trefle.io/api/v1/plants?token=" + APIkey + req.query.inputText)
//     .then(function(response) {
//         res.send(response.data);
//     });
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('An alligator approaches!');
// });

// app.listen(3000, () => console.log('Gator app listening on port 3000!'));

// var express = require('express');
// var app = express();
// var path = require('path');
// var port = process.env.PORT || 3000;

// Private API-key
// let APIKey = "UNtHDVWT5IrPmEf_BU3e6tjfn5Pivp_ivbt2MSWIETs";


// Express Middleware for serving static files
// app.use(express.static(path.join(__dirname, 'public')));

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });


// steam-API calls

// Requests the steamID matching the vanity player-url from the steam-server
// app.get('/plants', function(req, res) {
//     axios.get("https://trefle.io/api/v1/plants?token=" + APIKey)
//       .then(function(response) {
//         res.send(response.data);
//       });
// });




// app.listen(port, function() {
// 	console.log(`App listening on port`);
// });


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

const axios = require('axios');

async function getPlantName(){
    const response = await axios.get("https://trefle.io/api/v1/plants?token=UNtHDVWT5IrPmEf_BU3e6tjfn5Pivp_ivbt2MSWIETs")

    console.log(`{response.data.all.length}`)
}

getPlantName();