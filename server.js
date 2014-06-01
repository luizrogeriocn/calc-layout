// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var path	= __dirname;
var port    = 	process.env.PORT || 8888;

app.use(express.static(path));

// ROUTES
// ==============================================

app.get('/', function(req, res) {
	res.status(200).sendfile('./index.html');	
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
