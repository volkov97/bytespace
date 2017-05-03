const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

if (process.env.NODE_ENV == 'development') {
  const swaggerJSDoc = require('./libs/swagger');

  // serve swagger on /swagger
  app.get('/swagger', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerJSDoc);
  });

  // serve swagger ui
  app.use(express.static(path.join(__dirname, '../docs')));
}

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const options = { index: false };
app.use(express.static(path.join(__dirname, '../dist'), options));

app.use('/api', require('./routes/api'));
app.use('/*', require('./routes/home'));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err);
});

module.exports = app;