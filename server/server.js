/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const UserApp = require('../database/db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/home', (req, res) => {
  UserApp.find({})
    .then((response) => {
      res.send(response);
    });
});

app.put('/like', (req, res) => {
  // console.log(`${req.body.id}`);
  UserApp.findByIdAndUpdate(`${req.body.id}`, { $inc: { likes: 1 } }, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
