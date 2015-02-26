
var mongoose = require('mongoose');
var express = require('express');

var routes = require('./routes');

mongoose.connect('mongodb://localhost/blog', function(err) {
    if (err) throw err;
    console.log('connected!');

    var app = express();
    var port = 3000;

    routes(app); // app router

    app.listen(port, function() {
        console.log('The server is running on http://localhost:%s', port);
    });
});