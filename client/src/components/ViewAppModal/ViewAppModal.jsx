/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import style from './viewAppModal.css';

const ViewAppModal = (props) => {
  const { appData: { appDescription, appDev, appName, appImage } } = props;
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="mt-1 ml-2">
          {`${appName}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className={`${style.devName} text-center`}>{`Developed By: ${appDev}`}</h3>
        {appImage !== '' ? <img src={appImage} className={style.appImage} /> : null}
        <p className={style.desc}>{appDescription}</p>
      </Modal.Body>
    </Modal>
  );
};

ViewAppModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  appData: PropTypes.shape({
    appName: PropTypes.string,
    appDescription: PropTypes.string,
    appDev: PropTypes.string,
    appLink: PropTypes.string,
    appImage: PropTypes.string,
    appLikes: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default ViewAppModal;
