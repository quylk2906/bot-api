var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const expressHbs = require('express-hbs');
const expressFlash = require('express-flash-2')
const session = require('express-session')
const passport = require('passport')
const mongoStore = require('connect-mongo')(session)
const {mongoose} = require('./database/mongoose')

var index = require('./routes/index_api');
var users = require('./routes/users_api');
var bot = require('./routes/bot_api');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', expressHbs.express4({
  partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname + '/views/layouts/layout',
  extname: '.hbs',
  beautify: true
}));

// Set up Express HBS registerHelper
expressHbs.registerHelper("inc", (value, by, options) => {
  return parseInt(value + by) + 1
})

expressHbs.registerHelper('times', function(from, to, block) {
  var accum = '';
  for( var i = from; i <= to; ++i)
      accum += block.fn(i);
  return accum;
});
// Set up resources
// app.use('/assets/css', express.static(__dirname + '/public/stylesheets'))
// app.use('/assets/fonts', express.static(__dirname + '/public/fonts'))
// app.use('/assets/js', express.static(__dirname + '/public/javascripts'))
// app.use('/assets/include', express.static(__dirname + '/public/include'))
// app.use('/assets/magazine', express.static(__dirname + '/public/magazine'))
// app.use('/assets/images', express.static(__dirname + '/public/images'))

app.use('/assets/css', express.static(__dirname + '/public/css'))
app.use('/assets/fonts', express.static(__dirname + '/public/fonts'))
app.use('/assets/js', express.static(__dirname + '/public/js'))
app.use('/assets/images', express.static(__dirname + '/public/images'))

app.use(express.static(path.join(__dirname, 'public')));
// uncomment after placing your favicon in /public

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'dev-js',
  resave: false,
  saveUninitialized: false,
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  }),
  cookie: {
    maxAge: 180 * 60 * 1000
  }
  // secret : "secret",
  // saveUninitialized: true,
  // resave: true
}))


app.use(expressFlash())
app.use('/', index);
app.use('/users', users);
app.use('/bot', bot);

// catch 404 and forward to error handler
// app.get('*', function (req, res) {
//   res.render('common/page-not-found', {
//     title: '404 Error'
//   })
// });
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
