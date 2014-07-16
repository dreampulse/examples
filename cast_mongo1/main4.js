// npm install express
// npm install body-parser
// npm install mongoose
// npm install q

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var app = express();
// parse application/json
app.use(bodyParser.json());
app.set('json spaces', 2);  // pretty print json

//app.use(require('express-promise')());

var colModel = mongoose.model('Col', {
    message: String,
    foo: String
  });

mongoose.connect('mongodb://127.0.0.1:27017/testScreenCast');
var db = mongoose.connection;

// curl -X GET http://localhost:3000/col
app.get('/col', function (req, res) {

//  res.json({ res : colModel.find({})});

  colModel.find({}).exec()
    .then(function(docs) {
      res.send(docs);
    })
    .end();

});

// curl -H "Content-Type: application/json" -X PUT http://localhost:3000/col -d '{"message":"hallo"}'
app.put('/col', function (req, res) {

  var obj = new colModel(req.body);

  obj.save().exec()
    .then(function(){
      res.send(200);
    })
    .end();

});


db.once('open', function () {
  console.log('mongo db connection opened');

  var server = app.listen(3000, function () {
    console.log('Server running');
  });

});

