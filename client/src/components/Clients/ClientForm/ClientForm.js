import React, { useState } from 'react';

import { Button, Col, Row } from 'react-bootstrap';

import { registerClient } from '../../../actions/clientActions'

import './ClientForm.css';

const ClientForm = ({ dispatch }) => {

    const [form, setForm] = useState({
        name: '',
        last_name: '',
        telephone: '',
        email: '',
        gender: '',
        birthday: undefined,
        contact_name_1: '',
        contact_telephone_1: '',
        contact_name_2: '',
        contact_telephone_2: '',
    });

    const handleInputChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(registerClient(form));
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="client-form-section">
                    <Row className="main-client-row">
                        <Col md={12} xs={12} sm={12} className="client-info-div">
                            <Row className="pl-4">
                                <h5>Información básica</h5>
                            </Row>
                            <Row className="mt-2">
                                <Col md={4} xs={12} sm={12}>
                                    <label>Nombre</label>
                                    <input
                                        name="name"
                                        placeholder="Nombre"
                                        required={true}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col md={4} xs={12} sm={12}>
                                    <label>Apellidos</label>
                                    <input
                                        name="last_name"
                                        placeholder="Apellidos"
                                        required={true}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col md={4} xs={12} sm={12}>
                                    <label>Teléfono</label>
                                    <input
                                        name="telephone"
                                        placeholder="Teléfono"
                                        required={true}
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>

                            <Row>
                                <Col md={4} xs={12} sm={12}>
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        placeholder="Correo electrónico"
                                        required={true}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col md={4} xs={12} sm={12}>
                                    <label className="select">
                                        Sexo
                                    <div>
                                            <select
                                                name="gender"
                                                placeholder="Sexo"
                                                required={true}
                                                onChange={handleInputChange}>
                                                <option value=""></option>
                                                <option value="MALE">Masculino</option>
                                                <option value="FEMALE">Femenino</option>
                                            </select>
                                            <svg>
                                                <use xlinkHref="#select-arrow-down"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </Col>
                                <Col md={4} xs={12} sm={12}>
                                    <label>Fecha de nacimiento</label>
                                    <input
                                        name="birthday"
                                        type="date"
                                        placeholder="Fecha de nacimiento"
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div className="client-form-section mt-4">
                    <Row>
                        <Col xl={12} lg={12} md={12} xs={12} sm={12}>
                            <Row className="pl-4">
                                <h5>Contactos de emergencias</h5>
                            </Row>

                            <Row className="mt-4">
                                <Col md={6} xs={12} sm={12}>
                                    <label>Nombre</label>
                                    <input
                                        name="contact_name_1"
                                        required={true}
                                        placeholder="Nombre completo"
                                        onChange={handleInputChange} />
                                </Col>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Teléfono</label>
                                    <input
                                        name="contact_telephone_1"
                                        required={true}
                                        placeholder="Teléfono"
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>

                            <hr />

                            <Row>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Nombre</label>
                                    <input
                                        name="contact_name_2"
                                        placeholder="Nombre completo"
                                        onChange={handleInputChange} />
                                </Col>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Teléfono</label>
                                    <input
                                        name="contact_telephone_2"
                                        placeholder="Teléfono"
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <Row className="justify-content-around mt-4">
                    <Col lg={12} sm={12} className="justify-content-center d-flex mt-2">
                        <Button variant="primary" type="submit">
                            Registrar
                    </Button>
                    </Col>
                </Row>
            </form>
        </div>
    );
}

export default ClientForm;