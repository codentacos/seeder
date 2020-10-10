/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navibar from '../Navibar/Navibar.jsx';
import HomePage from '../../pages/HomePage.jsx';
import SignUpPage from '../../pages/SignUpPage.jsx';
import LogInPage from '../../pages/LogInPage.jsx';

const App = () => (
  <Router>
    <div>
      <Navibar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="/login">
          <LogInPage />
        </Route>
      </Switch>

    </div>
  </Router>
);

export default App;
