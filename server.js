var express    = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(require('./controllers'));
app.set('port', (process.env.PORT || 8084));

var mongooseOptions = { 
	useMongoClient: true
};

mongoose.connect("mongodb://localhost:27017/djkstra", mongooseOptions);

app.listen(app.get('port'))