// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8888;

// ROUTES
// ==============================================

app.get('/', function(req, res) {
	res.send('Read Me será aqui!');	
});

app.post('/add', function(req, res) {
	res.send('Rota de soma!');	
});

app.post('/sub', function(req, res) {
	res.send('Rota de subtração!');	
});

app.post('/mult', function(req, res) {
	res.send('Rota de multiplicação!');	
});

app.post('/div', function(req, res) {
	res.send('Rota de divisão!');	
});



// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);