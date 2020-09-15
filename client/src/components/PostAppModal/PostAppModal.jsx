/* eslint-disable object-curly-newline */
import React from 'react';
import { Modal, Form, FormGroup, FormLabel, FormControl, Button, FormText } from 'react-bootstrap';
import PropTypes from 'prop-types';
import heart from '../../assets/images/heartFull.svg';
import style from './postAppModal.css';

const PostAppModal = (props) => {
  const { show, handleClose, submit, handleChange, formData } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="mt-1 ml-2">Submit Application</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>
          <FormGroup controlId="formDescription">
            <FormText>
              This form will add your application to our database and allow others
              to show support for you and your application!
              <img src={heart} className={`${style.modalHeart} ml-1`} alt="heart logo" />
            </FormText>
          </FormGroup>
          <FormGroup controlId="applicationName">
            <FormLabel>Application Name:</FormLabel>
            <FormControl type="text" name="appName" onChange={handleChange} value={formData.appName} placeholder="Enter app name" required />
          </FormGroup>
          <FormGroup controlId="developerName">
            <FormLabel>Developer Name:</FormLabel>
            <FormControl type="text" name="appDev" onChange={handleChange} value={formData.appDev} placeholder="Enter developer name" required />
          </FormGroup>
          <FormGroup controlId="description">
            <FormLabel>Description:</FormLabel>
            <FormControl as="textarea" name="appDescription" onChange={handleChange} value={formData.appDescription} placeholder="Enter description" required />
          </FormGroup>
          <FormGroup controlId="imageUrl">
            <FormLabel>Image of Application:</FormLabel>
            <FormControl as="input" name="appImage" onChange={handleChange} value={formData.appImage} placeholder="Enter image URL" required />
          </FormGroup>
          <FormGroup controlId="appLink">
            <FormLabel>Link to Application:</FormLabel>
            <FormControl type="text" name="appLink" onChange={handleChange} value={formData.appLink} placeholder="Enter link" required />
          </FormGroup>
          <Button type="submit" className={`${style.button} d-block m-auto`}>Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

PostAppModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    appName: PropTypes.string,
    appDescription: PropTypes.string,
    appDev: PropTypes.string,
    appLink: PropTypes.string,
    appImage: PropTypes.string,
    appLikes: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default PostAppModal;
