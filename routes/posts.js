
var loggedIn = require('../middleware/loggedIn');

var mongoose = require('mongoose');
var BlogPost = mongoose.model('BlogPost');

module.exports = function (app) {

    //create
    app.get("/post/create", loggedIn, function (req, res) {
        res.render('post/create.jade');
    })

    app.post("/post/create", loggedIn, function (req, res, next) {
        var body = req.param('body');
        var title = req.param('title');
        var user = req.session.user;

        BlogPost.create({
            body: body,
            title: title,
            author: user
        }, function(err, post) {
            if (err) return next(err);
            res.redirect('/post/' + post.id);
        });
    })

    //read
    app.get("/post/:id", function (req, res, next) {
        var query = BlogPost.findById(req.param('id'));

        query.populate('author');

        query.exec(function (err, post) {
            if (err) return next(err);
            if (!post) return next(); // 404
            res.render('post/view.jade', { post: post });
        })
    })

    //TODO update

    //TODO delete
}