var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function(app) {
  //config do ambiente através de chave,valor
  app.set('port' , 3000);
  //config do middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.set('view engine','ejs');
  app.set('views','./app/views');

  //config session, cookie and passport
  app.use(cookieParser());
  app.use(session(
    { secret: 'homem avestruz' ,
      resave: true,
      saveUninitialized: true
    }
  ));

  app.use(passport.initialize());
  //middlewares de proteção
  app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));
  app.use(passport.session());
  //app.disable('x-powered-by');
  

  //express-load
  load('models', {cwd: 'app'})
          .then('controllers')
          .then('routes/auth.js')
          .then('routes')
          .into(app);
  
  //se nenhuma rota atender
  app.get('*', function(req, res) {
    res.status(404).render('404');
  });

  return app;
};
