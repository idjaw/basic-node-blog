var express = require('express');
var app = express();
var jade = require('jade');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/blogsalot');
var collection = db.get('blogsalot');
var bodyParser = require('body-parser');

// Setup
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(bodyParser());

// Routing Configuration
//require('./routes/main')(app);
app.get('/', function (req, res) {
    collection.find({}, {}, function (e, docs) {
        res.render('index', {
            blog_data: docs
        });
    });
});

app.get('/newpost', function (req, res) {
    res.render('newpost', {
        blog_title: 'Mix a blog',
        blog_post: 'Make a new blog post!'
    });
});

app.post('/submitentry', function (req, res) {
    var object = req.body;
    console.log(object);
    collection.insert(object, function (err, doc) {
        if (err) { res.send("Error with post"); }
        else { res.redirect("/"); }
    });
});

// Start server
var server = app.listen(app.get('port'), function () {
    console.log('We have started our server on port 3000');
});