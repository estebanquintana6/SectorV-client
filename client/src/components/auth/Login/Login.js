import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../actions/authActions';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { selectAuth } from '../../../utils/selectors';

import './Login.css';


const Login = ({ history }) => {
  const auth = useSelector(selectAuth);

  if (auth.isAuthenticated) {
    history.push('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  return (
    <Container>
      <div className="text-center mt-5">
        <h1 className="primary-dark">Inicio de sesión</h1>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="secondary-light">
            Correo electrónico
                  </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="primary-dark"
            placeholder="correo@mail.com"
            className="primary-dark"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="secondary-light">Contraseña</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="primary-dark"
            placeholder="Introduce tu contraseña"
          />
        </Form.Group>
        <Row className="justify-content-around">
          <Col lg={12} sm={12} className="justify-content-center d-flex mt-2">
            <Button variant="primary" type="submit">
              Iniciar Sesión
                    </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;