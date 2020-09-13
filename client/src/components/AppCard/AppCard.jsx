/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './appCard.css';

const AppCard = (props) => {
  const { appData: { desc, appName, dev, likes, _id } } = props;
  const { handleHearts } = props;
  const [description, setDescription] = useState(desc.length > 150 ? desc.slice(0, 150) : desc);
  const [voted, setVoted] = useState(false);

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
          <div className={voted === false ? `${style.heart} d-inline-block` : `${style.heartFull} d-inline-block`} onClick={voted === false ? () => { handleHearts(_id); setVoted(true); } : null}><span className="ml-4">{likes}</span></div>
        </Col>
      </Row>
    </Container>
  );
};

AppCard.propTypes = {
  handleHearts: PropTypes.func.isRequired,
  appData: PropTypes.shape({
    appName: PropTypes.string,
    desc: PropTypes.string,
    dev: PropTypes.string,
    likes: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default AppCard;
