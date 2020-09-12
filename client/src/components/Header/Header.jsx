import React from 'react';
import {
  Container, Jumbotron, Row, Col,
} from 'react-bootstrap';
import devHeader from '../../assets/images/devHeader.svg';
import style from './header.css';

const Header = () => (
  <Jumbotron>
    <Container>
      <Row>
        <Col className="d-flex align-items-center">
          <h1>Support your favorite developers & applications</h1>
        </Col>
        <Col xs={6}>
          <img src={devHeader} className={style.devHeader} alt="Cartoon programmer writing code" />
        </Col>
      </Row>

    </Container>
  </Jumbotron>
);

export default Header;
