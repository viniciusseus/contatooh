var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');
    
    passport.use(new GitHubStrategy({
        clientID: "6182039eda8b49831e0b",
        clientSecret: "14ea92f7affc37690df6329ecea8e28dedf77d0f",
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    }, function(accessToken, refreshToken, profile, done){

        Usuario.findOrCreate(
            {"login" : profile.username},
            {"nome": profile.username},
            function(err, usuario) {
                return done(err, usuario);
            }
        );
    }));
    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });
    passport.deserializeUser(function(id, done){
        Usuario.findById(id).exec()
        .then(function(usuario) {
            done(null, usuario);
        });
    });
};
