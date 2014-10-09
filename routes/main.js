/*module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Sir Blogsalot',
            message: 'I like big blogs and I cannot lie!'
        });
    });

    app.get('/newpost', function (req, res) {
        res.render('newpost', {
            title: 'Mix a blog',
            message: 'Make a new blog post!'
        });
    });

    app.post('/submitentry', function (req, res) {
        res.send('Your blog entry is: %s', req.body);
    });
};
*/