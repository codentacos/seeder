/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './appCard.css';

const AppCard = (props) => {
  const { appData: { desc, appName, dev, likes } } = props;
  const [description, setDescription] = useState(desc.length > 150 ? desc.slice(0, 150) : desc);

  return (
    <Container className={style.appCard}>
      <Row>
        <Col xs={12}>
          <h2>{appName}</h2>
        </Col>
        <Col className="mb-2">
          <span>
            <u>Developed by: {dev}</u>
          </span>
        </Col>
      </Row>
      <Row>
        <p className="ml-3 mr-3 mb-1">{`${description}...`}</p>
        <span className="ml-3 mb-2">See More</span>
      </Row>
      <Row>
        <Col>
          <div className={`${style.heart} d-inline-block`}><span className="ml-4">{likes}</span></div>
        </Col>
      </Row>
    </Container>
  );
};

AppCard.propTypes = {
  appData: PropTypes.shape({
    appName: PropTypes.string,
    desc: PropTypes.string,
    dev: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
};

export default AppCard;
