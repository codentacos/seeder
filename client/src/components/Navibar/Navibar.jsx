import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sprout from '../../assets/images/sprout.png';
import style from './navibar.css';

const Navibar = () => (
  <Navbar bg="transparent" expand="sm">
    <Navbar.Brand href="#">
      <img src={Sprout} className={`${style.sprout} mr-2`} alt="Plant sprouting logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign-Up</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navibar;
