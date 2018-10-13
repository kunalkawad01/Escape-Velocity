const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const backtest = require('./routes/backtest')
const backtestentry = require('./routes/backtestentry')
const backtestentryexit = require('./routes/backtestentryexit')
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// DB Config
//const db = require('./config/keys').mongoURI;

// Connect to MongoDB
// mongoose
//     .connect(db)
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));


mongoose.connect(
    "mongodb://localhost/ashokexp"
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log(" we're connected!");
});









// Passport middleware
app.use(passport.initialize());
app.use('/api/backtest', backtestentryexit)
//app.use('/api/backtestentry', backtestentry)
// Passport Config
//require('./config/passport')(passport);

// Use Routes
// app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
