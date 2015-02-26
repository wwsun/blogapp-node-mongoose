
var mongoose = require('mongoose');
var express = require('express');

var models = require('./models');
var routes = require('./routes');
var middleware = require('./middleware');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/blog', function(err) {
    if (err) throw err;
    console.log('connected!');

    var app = express();
    var port = 3000;

    middleware(app);
    routes(app); // app router

    app.listen(port, function() {
        console.log('The server is running on http://localhost:%s', port);
    });
});