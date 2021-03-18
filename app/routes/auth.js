const passport = require("passport");

module.exports = function(app) {
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', 
        passport.authenticate('github', { failureRedirect: '/auth'}),
            function(req, res) {
                //success
                res.redirect('/');
            }
    );

    app.get('/', function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        else {
            //renderiza auth.ejs
            res.render("auth");
        }
    });
};