// app/routes/index.js

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {"usuarioLogado": req.user.login});
    });
    app.get('/logout', function(req, res) {
        req.logOut(); //exposto pelo passport
        res.redirect('/');
    })
};