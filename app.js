 var   express     = require('express')
    , app         = express()
    , bodyParser  = require('body-parser')
    , request     = require('request')
    , http        = require('http')
    , path        = require('path')
    //, config        = require('config')
    , config        = require('./config')
    , mysql         = require('node-mysql')
    , router        = express.Router()
    ;

var db = new mysql.DB(config.get('db'));
app.use(express.static('public/dist'));
app.use('/bower_components', express.static('public/bower_components'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);
app.use('*', express.static('public/dist/index.html'));

db.connect(function(conn, cb){

    var cors = require('cors');
    app.use(cors());

    /*var history = [
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
     });*/

    app.set('port', config.get('port'));

    require('./routes.js')(router, conn);

    var server = app.listen(app.get('port'), function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });
});

