/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
const UserApp = require('../database/db.js');

app.use(express.static('public'));

app.get('/home', (req, res) => {
  UserApp.find({})
    .then((response) => {
      res.send(response);
    });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
