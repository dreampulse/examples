// npm install express
// npm install body-parser
// npm install mongoose

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var app = express();
// parse application/json
app.use(bodyParser.json());
app.set('json spaces', 2);  // pretty print json

var itemModel = mongoose.model('Item', {
  task: String,
  done: Boolean
});

mongoose.connect('mongodb://127.0.0.1:27017/testScreenCast');
var db = mongoose.connection;

// curl -X GET http://localhost:3000/col
app.get('/item', function (req, res) {

  itemModel.find({}, function(err, docs) {
    if (err) throw err;
    res.send(docs);
  });
});

// curl -H "Content-Type: application/json" -X PUT http://localhost:3000/col -d '{"message":"hallo"}'
app.put('/item', function (req, res) {

  var obj = new itemModel(req.body);
//  var obj = new colModel({
//    message : req.body.message,
//    foo : req.body.foo
//  });

  obj.save(function(err) {
    if (err) throw err;
    res.send(200);
  });

});


db.once('open', function () {
  console.log('mongo db connection opened');

  var server = app.listen(3000, function () {
    console.log('Server running');
  });

});


