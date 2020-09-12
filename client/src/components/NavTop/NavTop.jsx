import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Sprout from '../../assets/images/sprout.png';
import style from './navTop.css';

const NavTop = () => (
  <Navbar bg="transparent" expand="sm">
    <Navbar.Brand href="#"><img src={Sprout} className={style.sprout} alt="Plant sprouting logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#" disabled>Login</Nav.Link>
        <Nav.Link href="#" disabled>Sign-Up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavTop;
