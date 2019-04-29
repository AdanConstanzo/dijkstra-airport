var express    = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(require('./controllers'));
app.set('port', (process.env.PORT || 8084));

mongoose.connect("mongodb://localhost/djkstra", { useNewUrlParser: true });

app.listen(app.get('port'))