/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
// require('../auth/config/passport.js');

const app = express();
const port = 3000;
const passport = require('passport');
// const UserApp = require('../database/db.js');

// express app setup
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// required for passport
app.use(session({ secret: 'thisismysessionsecret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messeges stored in the session

require('./routes.js')(app, passport);

app.listen(process.env.PORT || port, () => {
  console.log(`App is running on port: ${port}`);
});
