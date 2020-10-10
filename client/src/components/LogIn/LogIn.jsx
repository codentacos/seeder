/* eslint-disable object-curly-newline */
import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Container, Button } from 'react-bootstrap';
import style from './login.css';

const LogIn = () => (
  <Container className={style.loginContainer}>
    <h1>Log in</h1>
    <Form>
      <FormGroup>
        <FormLabel>Username</FormLabel>
        <FormControl type="text" name="userName" placeholder="username" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl type="password" name="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Button type="submit" className={style.button}>Sign-Up</Button>
      </FormGroup>
    </Form>
  </Container>
);

export default LogIn;
