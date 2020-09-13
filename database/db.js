const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@seed-mvp.ucefo.mongodb.net/seed-mvp?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
const UserAppSchema = new mongoose.Schema({
  appName: String,
  dev: String,
  desc: String,
  likes: Number,
});

const UserApp = mongoose.model('UserApp', UserAppSchema);
// const UserApp = new App;

// UserApp.create({
//   appName: 'Doubly Downer',
//   dev: 'Frank Dunce',
//   desc: 'Ullamco occaecat sit non sint veniam elit dolor officia qui aute nisi ipsum.' +
//     'Adipisicing proident mollit ex consectetur irure ullamco officia irure nostrud est.' +
//     'Ullamco nulla aliquip cillum mollit dolor amet veniam amet reprehenderit velit.' +
//     'Veniam officia dolore do labore aliquip ad est adipisicing ea nulla incididunt ' +
//     'voluptate. Proident laboris Lorem id pariatur aliqua non consectetur voluptate dolore' +
//     'ipsum. Proident reprehenderit elit sint in nisi ea nostrud ea. Minim tempor consectetur ' +
//     'consectetur aute id excepteur ipsum minim sunt anim reprehenderit ipsum fugiat aliquip.',
//   likes: 14,
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('DB is connected');
});

module.exports = UserApp;
