// npm install express
// npm install body-parser
// npm install mongodb

var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
// parse application/json
app.use(bodyParser.json());


var colSchema = function(doc) {
  this.message = doc.message;
  this.foo = doc.foo;
};


MongoClient.connect('mongodb://127.0.0.1:27017/testScreenCast', {db: {native_parser: true}}, function (err, db) {
  if (err) throw err;

  console.log("Mongo connection open..");

  // curl -X GET http://localhost:3000/col
  app.get('/col', function (req, res) {
    db.collection('col').find().toArray(function (err, docs) {
      if (err) throw err;

      for (var i in docs) {
        docs[i] = new colSchema(docs[i]);
      }

      res.send(docs);
    });
  });

  // curl -H "Content-Type: application/json" -X PUT http://localhost:3000/col -d '{"message":"hallo"}'
  app.put('/col', function (req, res) {

    var obj = new colSchema(req.body);

    db.collection('col').insert(obj, function (err, docs) {
      if (err) throw err;

      res.send(200);
    });
  });

  var server = app.listen(3000, function () {
    console.log('Server running');
  });

});



