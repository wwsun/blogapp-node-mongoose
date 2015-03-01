var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function(app) {
    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session( {secret: 'building a blog app'} ))

    app.use(express.static(path.join(__dirname, 'public')));

    // expose session to views
    app.use(function(req, res, next) {
        res.locals.session = req.session;
        next();
    })
}