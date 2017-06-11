const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const cors = require('cors');

const config = require('./config/general.config');

const app = express();

if (process.env.NODE_ENV == 'development') {
  // add design folder to interface
  app.use('/design-docs', serveIndex(path.join(__dirname, '../docs/design-docs'), {'icons': true}));
}

const corsOptions = {
    origin: config.client,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const options = { index: false };
app.use(express.static(path.join(__dirname, '../dist'), options));

app.use('/api', require('./routes/api'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/*', require('./routes/home'));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err);
});

module.exports = app;