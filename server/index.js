const express = require('express');
const pg = require('pg');

const server = express();
const port = 34343;

server.get('/reviews/', function(req, res){
    console.log('Recieved a GET request for reviews.');
    //get from db
    res.send('GET request received.');
});

server.post('/reviews/', function(req, res){
    console.log('Recieved a POST request for reviews.');
    //insert into db
    res.send('POST request received.');
});

server.listen(port, function() {
    console.log(`Server listening on port ${port}.`);
});