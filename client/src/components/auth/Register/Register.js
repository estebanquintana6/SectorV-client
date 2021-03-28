import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { registerUser, clearRegister } from '../../../actions/authActions';

import swal from '@sweetalert/with-react';

import { Button, Container, Col, Form, Row } from 'react-bootstrap';

import './Register.css';

const Register = ({ history, auth, registerUser }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  if (auth.isAuthenticated) {
    history.push('/');
  }

  if(auth.registerDone) {
    clearRegister();
    
    swal({
      title: 'Tu registro fue exitoso',
      text: "Ahora puedes iniciar sesión",
      icon: 'success',
    });

    history.push('/login');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      last_name: lastName,
      email: email,
      telephone: phone,
      password: password,
      passwordConfirmation: password2,
    };

    registerUser(newUser, history);
  };

  return (
    <Container>
        <div className="text-center mt-5">
            <h1 className="primary-dark">Nuevo Usuario</h1>
            <span className="primary-dark">Completa los siguientes datos</span>
        </div>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formName">
                <Form.Label>Nombre(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan Carlos"
                  className="primary-dark"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  className="primary-dark"
                  placeholder="Apellido paterno, materno"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formHeight">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  className="primary-dark"
                  placeholder="ejemplo@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formWeight">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  className="primary-dark"
                  placeholder="(123) 456 6789"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formHeight">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  className="primary-dark"
                  placeholder="***********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formWeight">
                <Form.Label>Confirma tu contraseña</Form.Label>
                <Form.Control
                  type="password"
                  className="primary-dark"
                  placeholder="***********"
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col className="text-right">
              <Button type="sumbit">Crear Usuario</Button>
            </Col>
          </Row>
        </Form>

    </Container>
  )
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
