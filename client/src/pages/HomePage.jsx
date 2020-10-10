/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import Header from '../components/Header/Header.jsx';
import PostAppModal from '../components/PostAppModal/PostAppModal.jsx';
import AppCard from '../components/AppCard/AppCard.jsx';
import style from '../components/App/app.css';

const Home = () => {
  const [show, setShow] = useState(false);
  const [userApps, setUserApps] = useState([]);
  const [newApp, setNewApp] = useState({
    appName: '',
    appDev: '',
    appDescription: '',
    appLink: '',
    appImage: '',
    appLikes: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios('/home')
      .then((response) => {
        setUserApps(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  // Handles upvoting apps and re-render with updated data
  const handleHearts = (id) => {
    axios.put('/like', { id })
      .then(() => {
        axios('/home')
          .then((response) => {
            setUserApps(response.data);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      });
  };

  // handles updating state when typing into modal form
  const handleChangeFormData = (event) => {
    const { name } = event.target;
    setNewApp({ ...newApp, [name]: event.target.value });
  };

  const handleSubmitFormData = () => {
    axios.post('/submitapp', newApp);
  };

  // handles rendering appCards depending on how many come back from the database
  const handleAppCards = () => {
    if (userApps.length > 0) {
      return (
        <div>
          {userApps.map((el) => (
            <AppCard
              appData={el}
              // eslint-disable-next-line no-underscore-dangle
              key={el._id}
              handleHearts={handleHearts}
            />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <Header />
      <Container>
        <h2 className="text-center">Want to submit your application?</h2>
        <Button className={`${style.button} d-block ml-auto mr-auto mb-3`} onClick={handleShow}>Post an App</Button>
        {handleAppCards()}
        <PostAppModal
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
          submit={handleSubmitFormData}
          handleChange={handleChangeFormData}
          formData={newApp}
        />
      </Container>
    </div>
  );
};

export default Home;
