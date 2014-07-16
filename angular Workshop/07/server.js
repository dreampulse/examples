var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.post('/list', function(req, res){
  res.json({list:
    [{
      job : "admin",
      name : "max"
    }, {
      job : "consultant",
      name : "steve"
    }, {
      job : "developer",
      name : "caroline"
    }]
  });
});

var server = app.listen(8888);