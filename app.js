var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var http = require('http');
var path = require('path');
var config = require('config');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var cors = require('cors');
app.use(cors());

var history = [
  {
    id: 1,
    type: "GET",
    url: "http://localhost/server"
  },
  {
    id: 2,
    type: "POST",
    url: "http://localhost/server"
  },
  {
    id: 3,
    type: "GET",
    url: "http://localhost/server/45"
  }
];
var historyId = history.length;

app.get('/server', function(req, res) {

});

app.post('/server', function(req, res) {
  var hist = req.body;
  hist.id = ++historyId;

  var url = hist.url;

  if (url.indexOf('http')) {
    url = 'http://' + url;
  }
  request({
    method: hist.type,
    uri: url,
  }, function (error, response, body) {
    history.push(hist);
    var obj={};
    obj.content = body;
    obj.history = hist;

    res.json(obj);
  });
/*
  history.push(hist);
  var obj={};
  obj.content = 'content with server';
  obj.history = hist;

  res.json(obj);
*/

});

app.get('/history', function(req, res) {
  res.json(history);
});

app.get('/history/:id', function(req, res) {
  var id = req.params.id;
  var h = null;

  for (var i in history) {
    if (history[i].id == id) {
      h = history[i];
      break;
    }
  }

  res.json(h);
});

app.delete('/history/:id', function(req, res) {
  var id = req.params.id;
  for (var i in history) {
    if (history[i].id == id) {
      history.splice(i, 1);
    }
  }

  res.json(history);
});

app.post('/history', function(req, res) {
  var obj = req.body;
  obj.id = ++historyId;

  history.push(obj);
  res.json(obj);
});

app.set('port', config.get('port'));

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)
})