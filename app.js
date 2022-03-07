var createError = require('http-errors');
var express = require('express');
const dotenv = require("dotenv")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require("cors")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registered = require("./routes/register")
var login = require("./routes/login")

var app = express();
dotenv.config();

const mongo = process.env.DB_DETAILS
mongoose.connect(mongo,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    
  },  ()=>{
    console.log("connected to DB")
  });
  
  // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registered);
app.use('./login', login);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
