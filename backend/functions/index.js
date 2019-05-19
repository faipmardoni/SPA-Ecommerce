const createError = require('http-errors');
const cors = require('cors');
const express = require('express');

const functions = require('firebase-functions');
const productsRouter = require('./routes/product');

const app = express();

app.use(cors());
app.use('/products', productsRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

exports.app = functions.https.onRequest(app);
