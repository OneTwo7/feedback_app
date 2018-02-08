const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = express();
const PORT = process.env.PORT || 5000;

require('./models/User');

mongoose.connect(keys.db.mongoURI).catch(err => {
  console.log('encountered error when connection to DB -', err);
});

require('./services/passport');

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookie.secret]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT);
