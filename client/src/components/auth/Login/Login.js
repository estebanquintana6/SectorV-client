import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../../../actions/authActions';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import './Login.css';



const Login = ({ history, auth, loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const goToPage = (route) => {
    history.push(route);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    loginUser(userData);
  };

  if (auth.isAuthenticated) {
    history.push('/');
  }

  return (
    <Container>
      <div className="text-center mt-5">
        <h1 className="primary-dark">Inicio de sesión</h1>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="secondary-light">
            Correo electrónico / Teléfono
                  </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="primary-dark"
            placeholder="correo@mail.com / 444123456789"
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
