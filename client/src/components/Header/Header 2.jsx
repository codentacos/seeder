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
        <Col xs={12} lg={6} className="d-flex align-items-center m-auto text-sm-center text-lg-left">
          <h1>Support your favorite developers & applications</h1>
        </Col>
        <Col xs={12} md={10} lg={6} className="m-auto">
          <img src={devHeader} className={style.devHeader} alt="Cartoon programmer writing code" />
        </Col>
      </Row>

    </Container>
  </Jumbotron>
);

export default Header;
