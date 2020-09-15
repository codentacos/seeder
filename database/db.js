/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@seed-mvp.ucefo.mongodb.net/seed-mvp?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
const UserAppSchema = new mongoose.Schema({
  appName: String,
  appDev: String,
  appDescription: String,
  appLink: String,
  appImage: String,
  appLikes: Number,
});

const UserApp = mongoose.model('UserApp', UserAppSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('DB is connected');
});

module.exports = UserApp;
