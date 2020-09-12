import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './appCard.css';

const AppCard = (props) => {
  const {desc} = props.appData;
  const [description, setDescription] = useState(desc.length > 150 ? desc.slice(0, 150) : desc);
  return (
    <Container className={style.appCard}>
      <Row>
        <Col xs={12}>
          <h2>{props.appData.appName}</h2>
        </Col>
        <Col className="mb-2">
          <span><u>Developed by: {props.appData.dev}</u></span>
        </Col>
      </Row>
      <Row>
        <p className="ml-3 mr-3 mb-1">{`${description}...`}</p>
        <span className='ml-3 mb-2'>See More</span>
      </Row>
      <Row>
        <Col>
          <div className={`${style.heart} d-inline-block`}><span className="ml-4">{props.appData.likes}</span></div>
        </Col>
      </Row>
    </Container>
  );
};
export default AppCard;
