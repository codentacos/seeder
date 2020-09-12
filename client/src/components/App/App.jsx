/* eslint-disable import/extensions */
import React from 'react';
import { Container } from 'react-bootstrap';
import NavTop from '../NavTop/NavTop.jsx';
import Header from '../Header/Header.jsx';
import AppCard from '../AppCard/AppCard.jsx';

const App = () => (
  <div>
    <NavTop />
    <Header />
    <Container>
      <AppCard />
      <AppCard />
      <AppCard />
    </Container>
  </div>
);

export default App;
