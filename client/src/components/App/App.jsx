/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Sprout from '../../assets/images/sprout.png';
import Header from '../Header/Header.jsx';
import AppCard from '../AppCard/AppCard.jsx';
import PostAppModal from '../PostAppModal/PostAppModal.jsx';
import SignUp from '../SignUp/Signup.jsx';
import style from './app.css';

const App = () => {
  const [userApps, setUserApps] = useState([]);
  const [show, setShow] = useState(false);
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

  // handles rendering appCards depending on how many come back from the database
  const handleAppCards = () => {
    if (userApps.length > 0) {
      return (
        <div>
          {userApps.map((el) => (
            <AppCard
              appData={el}
              key={el._id}
              handleHearts={handleHearts}
            />
          ))}
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
    <Router>
      <div>
        <Navbar bg="transparent" expand="sm">
          <Navbar.Brand href="#">
            <img src={Sprout} className={`${style.sprout} mr-2`} alt="Plant sprouting logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/login" className={`${style.linkDisabled} nav-link`} onClick={(e) => e.preventDefault()}>Login</Link>
              <Link to="/signup" className={`${style.linkDisabled} nav-link`}>Sign-Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
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
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;
