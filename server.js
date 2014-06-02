// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var path	= __dirname;
var port    = 	process.env.PORT || 8888;

app.use(express.static(path));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// ROUTES
// ==============================================

app.get('/', function(req, res) {
	res.status(200).sendfile('./index.html');	
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
