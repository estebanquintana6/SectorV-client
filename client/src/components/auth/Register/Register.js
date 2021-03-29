import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { registerUser, clearRegister } from '../../../actions/authActions';
import { selectAuth } from '../../../utils/selectors';

import swal from '@sweetalert/with-react';

import { Button, Container, Col, Form, Row } from 'react-bootstrap';


import './Register.css';

const Register = ({ history }) => {

  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

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

    dispatch(registerUser(newUser));
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

export default Register;