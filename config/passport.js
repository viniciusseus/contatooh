var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');
// const config = require('./config');
var config = require('./config')();

module.exports = function() {
    var Usuario = mongoose.model('Usuario');
    
    passport.use(new GitHubStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        clientPassword: config.clientPassword,
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
