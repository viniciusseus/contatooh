//server.js
var http = require('http');
var express = require('express');
var app = express();
require('./config/express')(app);
require('./config/passport')();
//require('./config/database')('mongodb://localhost/contatooh');
var config = require('./config/config')();
require('./config/database')(config.db);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + 
    app.get('port'));
});