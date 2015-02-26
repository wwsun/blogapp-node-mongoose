
var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost/blog', function(err) {
    if (err) throw err;
    console.log('connected!');

    var app = express();

    // default route test, delete it next
    app.get('/', function(req, res){ //Handle the user routes
        res.send(200, 'hello mongoose blog');
    });

    app.listen(3000, function() {
        console.log('now listening on http://localhost:3000');

    });
});