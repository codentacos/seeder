import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './appCard.css';

const AppCard = () => (
  <Container className={style.appCard}>
    <Row>
      <Col>
        <h2>Droppr App</h2>
      </Col>
      <Col className="d-flex align-items-center justify-content-end">
        <span>Developed by: Jeff Stanz</span>
      </Col>
    </Row>
    <Row>
      <p className="ml-3 mr-3">
        Consequat incididunt voluptate do tempor non incididunt adipisicing. Cillum laboris deserunt
        elit irure aute aute. In pariatur ut ullamco qui est anim ad ullamco excepteur nisi culpa dolore
        labore. Velit exercitation excepteur non eu eiusmod consectetur ullamco aliqua exercitation
        incididunt tempor id minim. Aute mollit dolor reprehenderit est do ut sunt non mollit fugiat
        esse in. Laboris tempor laboris deserunt cillum velit velit enim. Exercitation veniam aliqua
        veniam irure incididunt do.
      </p>
    </Row>
    <Row>
      <Col>
        <div className={`${style.heart} d-inline-block`}><span className="ml-4">222</span></div>
      </Col>
    </Row>
  </Container>
);

export default AppCard;
