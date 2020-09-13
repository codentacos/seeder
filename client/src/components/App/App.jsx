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

  return (
    <div>
      <NavTop />
      <Header />
      <Container>
        <Button className={`${style.button} d-block ml-auto mr-auto mb-3`} onClick={handleShow}>Post an App</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Title className="mt-1 ml-2">Submit Application</Modal.Title>
          <Modal.Header closeButton>
            <Modal.Body>
              {/* <form>
                  <label htmlFor="appName" className="d-flex">
                    App Name:
                  <input type="text" name="appName" className="ml-auto" />
                  </label>

                  <label htmlFor="dev" className="d-flex">
                    Developer Name:
                  <input type="text" name="dev" className="ml-auto" />
                  </label>

                  <label htmlFor="desc" className="d-flex">
                    App Description:
                  <textarea type="text" name="desc" className="ml-auto" />
                  </label>
              </form> */}

              <Form>
                <FormText>
                  This form will add your application to our database and allow others
                  to show support for you and your application!
                  <img src={heart} className={`${style.modalHeart} ml-1`} />
                </FormText>
                <FormGroup controlId="applicationName">
                  <FormLabel>Application Name:</FormLabel>
                  <FormControl type="text" placeholder="Enter app name" />
                </FormGroup>
                <FormGroup controlId="developerName">
                  <FormLabel>Developer Name:</FormLabel>
                  <FormControl type="text" placeholder="Enter developer name" />
                </FormGroup>
                <FormGroup controlId="description">
                  <FormLabel>Description:</FormLabel>
                  <FormControl as="textarea" placeholder="Enter description" />
                </FormGroup>
              </Form>
            </Modal.Body>
          </Modal.Header>
        </Modal>
        {handleAppCards()}
      </Container>
    </div>
  );
};

export default App;
