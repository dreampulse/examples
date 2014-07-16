// npm install express
// npm install body-parser

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('json spaces', 2);  // pretty print json


// parse application/json
//app.use(bodyParser.json());

var todoList = [];

// curl -X GET http://localhost:3000/list
app.get('/list', function(req, res) {
  res.send(todoList);
});


// curl -H "Content-Type: application/json" -X PUT http://localhost:3000/list -d '{"task":"Do everything"}'

/*

curl \
-H "Content-Type: application/json" \
-X PUT http://localhost:3000/list \
-d '{"task":"Do everything"}'

 curl -X GET http://localhost:3000/list

*/

app.put('/list', function(req, res) {
  todoList.push(req.body);
  res.send("Ok\n");
});

app.listen(3000, function() {
  console.log('server is running');
});

