// npm install express
// npm install body-parser
// npm install mongodb

var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();

// parse application/json
app.use(bodyParser.json());

MongoClient.connect('mongodb://127.0.0.1:27017/testScreenCast', {db: {native_parser: true}}, function (err, db) {
  if (err) throw err;

  console.log("Mongo connection open..");

  // curl -X GET http://localhost:3000/col
  app.get('/col', function (req, res) {
    db.collection('col').find().toArray(function (err, docs) {
      if (err) throw err;

      res.send(docs);
    });
  });

  // curl -H "Content-Type: application/json" -X PUT http://localhost:3000/col -d '{"message":"hallo"}'
  app.put('/col', function (req, res) {
    console.log(req.body);
    db.collection('col').insert(req.body, function (err, docs) {
      if (err) throw err;

      res.send(200);
    });
  });

  var server = app.listen(3000, function () {
    console.log('Server running');
  });

});



