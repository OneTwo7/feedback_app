const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = express();
const PORT = process.env.PORT || 5000;

require('./models/User');
require('./models/Survey');

mongoose.connect(keys.mongoURI).catch(err => {
  console.log('encountered error when connection to DB -', err);
});

require('./services/passport');

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // serve up client-side assets
  app.use(express.static('client/build'));
  // server up html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT);
