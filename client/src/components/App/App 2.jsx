/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import NavTop from '../NavTop/NavTop.jsx';
import Header from '../Header/Header.jsx';
import AppCard from '../AppCard/AppCard.jsx';

const App = () => {
  const [userApps, setUserApps] = useState([]);

  useEffect(() => {
    axios('/home')
      .then((response) => {
        setUserApps(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [userApps]);

  const handleAppCards = () => {
    if (userApps.length > 0) {
      return (
        <div>
          {userApps.map((el) => <AppCard appData={el} key={el._id} />)}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <NavTop />
      <Header />
      <Container>
        {handleAppCards()}
      </Container>
    </div>
  );
};

export default App;
