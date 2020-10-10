const UserApp = require('../../database/db');

// eslint-disable-next-line func-names
module.exports = function (app, passport) {
  // =========================================================
  // home gets initial data on homepage load
  // =========================================================
  app.get('/home', (req, res) => {
    UserApp.find({})
      .sort({ appLikes: 'desc' })
      .then((response) => {
        res.send(response);
      });
  });

  // =========================================================
  // catch all redirect for refreshing on other routes
  // =========================================================
  app.get('/*', (req, res) => {
    res.redirect('/');
  });

  // =========================================================
  // like updates record in database for liking applications
  // =========================================================
  app.put('/like', (req, res) => {
    UserApp.findByIdAndUpdate(`${req.body.id}`, { $inc: { appLikes: 1 } }, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(204);
      }
    });
  });

  // ===================================================================
  // /submitapp will insert a newly submitted app to the database
  // ===================================================================
  app.post('/submitapp', (req, res) => {
    console.log(req.body);
    UserApp.create(req.body);
    res.sendStatus(201);
  });
};
