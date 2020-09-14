/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Modal, Form, FormGroup, FormLabel, FormText, FormControl } from 'react-bootstrap';
import NavTop from '../NavTop/NavTop.jsx';
import Header from '../Header/Header.jsx';
import AppCard from '../AppCard/AppCard.jsx';
import style from './app.css';
import heart from '../../assets/images/heartFull.svg';

const App = () => {
  const [userApps, setUserApps] = useState([]);
  const [show, setShow] = useState(false);
  const [newApp, setNewApp] = useState({
    appName: '',
    appDev: '',
    appDescription: '',
    appLink: '',
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

  // handles rendering appCards depending on how many come back from the database
  const handleAppCards = () => {
    if (userApps.length > 0) {
      return (
        <div>
          {userApps.map((el) => <AppCard appData={el} key={el._id} handleHearts={handleHearts} />)}
        </div>
      );
    }
    return null;
  };

  // handles updating state when typing into modal form
  const handleChangeFormData = (event) => {
    const { name } = event.target;
    setNewApp({ ...newApp, [name]: event.target.value });
  };

  const handleSubmitFormData = () => {
    axios.post('/submitapp', newApp);
  };

  return (
    <div>
      <NavTop />
      <Header />
      <Container>
        <h2 className="text-center">Want to submit your application?</h2>
        <Button className={`${style.button} d-block ml-auto mr-auto mb-3`} onClick={handleShow}>Post an App</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="mt-1 ml-2">Submit Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitFormData}>
              <FormGroup controlId="formDescription">
                <FormText>
                  This form will add your application to our database and allow others
                  to show support for you and your application!
                  <img src={heart} className={`${style.modalHeart} ml-1`} alt="heart logo" />
                </FormText>
              </FormGroup>
              <FormGroup controlId="applicationName">
                <FormLabel>Application Name:</FormLabel>
                <FormControl type="text" name="appName" onChange={handleChangeFormData} value={newApp.appName} placeholder="Enter app name" required />
              </FormGroup>
              <FormGroup controlId="developerName">
                <FormLabel>Developer Name:</FormLabel>
                <FormControl type="text" name="appDev" onChange={handleChangeFormData} value={newApp.appDev} placeholder="Enter developer name" required />
              </FormGroup>
              <FormGroup controlId="description">
                <FormLabel>Description:</FormLabel>
                <FormControl as="textarea" name="appDescription" onChange={handleChangeFormData} value={newApp.appDescription} placeholder="Enter description" required />
              </FormGroup>
              <FormGroup controlId="appLink">
                <FormLabel>Link to Application:</FormLabel>
                <FormControl type="text" name="appLink" onChange={handleChangeFormData} value={newApp.appLink} placeholder="Enter link" required />
              </FormGroup>
              <Button type="submit" className={`${style.button} d-block m-auto`}>Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
        {handleAppCards()}
      </Container>
    </div>
  );
};

export default App;
