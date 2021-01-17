const express = require('express');
const https = require('https');
const pg = require('pg');
const fs = require('fs');
const bodyParser = require ('body-parser');
const multer = require('multer');
var upload = multer();

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express();
const server = https.createServer({key: key, cert:cert}, app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 34343;

const dbconf = {
    user: 'api',
    host: 'localhost',
    database: 'htn2021',
    port: '26257'
};

let pool = new pg.Pool(dbconf);

app.get('/reviews/', function(req, res){
    let address = req.query.address, placeName = req.query.placeName;
    console.log(`Recieved a GET request for address ${address} and place ${placeName}.`);
    pool.connect(function(err, client, done){
        if(err){
            console.error('Could not connect to CockroachDB', err);
        }
        client.query(`SELECT count(*) AS reviews, AVG(rating) AS rating, AVG(employee_masks) AS employee_masks, AVG(employee_distancing) AS employee_distancing, AVG(customer_masks) AS customer_masks, AVG(customer_distancing) AS customer_distancing FROM htn2021.reviews WHERE address='${address}' AND place_name='${placeName}';`, function(err, result1){
            if(err){
                return console.error('PG error.', err);
            }
            client.query(`SELECT count(CASE WHEN max_occupancy THEN 1 END) AS max_occ, count(CASE WHEN hand_sanitizer THEN 1 END) AS hand_san, count(CASE WHEN masks THEN 1 END) AS masks FROM reviews`, function (err, result2){
                client.release();
                if(err){
                    return console.error('PG error.', err);
                }
                result1.rows[0].max_occ = result2.rows[0].max_occ / result1.rows[0].reviews;
                result1.rows[0].hand_san = result2.rows[0].hand_san / result1.rows[0].reviews;
                result1.rows[0].masks = result2.rows[0].masks / result1.rows[0].reviews;
                res.send(result1.rows[0]);
            });
        });
    });
});

app.post('/reviews/', upload.none(), function(req, res){
    console.log('Recieved a POST request for reviews.');
    let address = req.body.address, placeName = req.body.placeName, rating = req.body.rating;
    let empMasks = req.body.empMasks, empDist = req.body.empDist, custMasks = req.body.custMasks, custDist = req.body.custDist;
    let handSan = req.body.handSan, masks = req.body.masks, maxOcc = req.body.maxOcc;
    let review_id = parseInt(fs.readFileSync('save.txt', 'utf8'));
    let datetime = new Date();
    console.log(req.body);
    pool.query(`INSERT INTO reviews VALUES ('${address}', '${placeName}', ${review_id + 1}, ${rating}, ${empMasks}, ${empDist}, ${custMasks}, ${custDist}, '${handSan}', '${masks}', '${datetime.toISOString().slice(0,10)}', '${maxOcc}')`, function(err, client, done){
        if(err){
            console.error('Could not connect to CockroachDB', err);
        }
        res.send('OK');
        fs.writeFileSync('save.txt', (review_id + 1).toString(), 'utf8');
    });
});

server.listen(port, function() {
    console.log(`Server listening on port ${port}.`);
});