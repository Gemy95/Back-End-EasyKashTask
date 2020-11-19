const createError = require('http-errors');
import express from 'express'
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app: express.Application = express();
import transactionRoute from "./routes/transactionRoute";

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const expressSwagger = require("express-swagger-generator")(app);
const swaggerConfig = require("./config/swaggerConfig");

app.use("/API", transactionRoute);
expressSwagger(swaggerConfig.options);

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
  let err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// eslint-disable-next-line
app.use(function (err: any, req: express.Request, res: express.Response) {
  // set locals, only providing error in development
  res.locals.message = err;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

export default app;
