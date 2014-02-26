// The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
var app = express();

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/myapp');

app.configure(function(){
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
});

// set up the RESTful API, handler methods are defined in api.js
var api = require('./app/controllers/api.js');
app.get('/demo', api.demo);
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);

app.listen(3000);
console.log('Listening on localhost:3000');