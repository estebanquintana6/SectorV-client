import React from 'react';

import { Col, Jumbotron, Row } from 'react-bootstrap';

import './ClientView.css';

const ClientView = ({ client }) => {
    return (
        <div>
            <div className="clientview-title-section">
                <div className="clientview-title-wrapper">
                    <h3 className="section-title">{client.name}</h3>
                </div>
            </div>

            <div className="basicinfo-clientview-section" id="client-info">
                <Row className="main-client-row">
                    <Col md={8} xs={12} sm={12} className="client-info-div">
                        <Row className="pl-4">
                            <h5>Información básica</h5>
                        </Row>
                        <Row>
                            <Col md={6} xs={12} sm={12}>
                                <label>Nombre</label>
                                <input placeholder="Nombre"></input>
                            </Col>
                            <Col md={6} xs={12} sm={12}>
                                <label>Apellidos</label>
                                <input placeholder="Apellidos"></input>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} xs={12} sm={12}>
                                <label>Sexo</label>
                                <input placeholder="Sexo"></input>
                            </Col>
                            <Col md={6} xs={12} sm={12}>
                                <label>Fecha de nacimiento</label>
                                <input type="date" placeholder="Fecha de nacimiento"></input>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={4} xs={12} sm={12} className="tickets-div">
                        <Jumbotron className="tickets-jumbotron">
                            <div className="tickets-jumbotron-content">
                                <h5>Entradas restantes</h5>
                                <h1 className="mt-3">3</h1>
                            </div>
                        </Jumbotron>

                    </Col>
                </Row>
            </div>

            <div className="mt-4">
                <Row className="clientview-row">
                    <Col xl={4} lg={4} md={4} xs={12} sm={12} className="clientview-section-div">
                        <div className="clientview-section-div">
                        </div>
                    </Col>

                    <Col xl={8} lg={8} md={8} xs={12} sm={12}>
                        <div className="clientview-section-div">
                            <Row>
                                <h5>Información de pagos</h5>
                            </Row>

                            <Row className="mt-2">
                                <table>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Monto</th>
                                        <th>Descripción</th>
                                        <th>Expiración</th>
                                    </tr>
                                    <tr>
                                        <td>14/02/2020</td>
                                        <td>$440</td>
                                        <td>4 ENTRADAS</td>
                                        <td>14/03/2020</td>
                                    </tr>
                                    <tr>
                                        <td>04/01/2020</td>
                                        <td>$420</td>
                                        <td>9 ENTRADAS</td>
                                        <td>14/02/2020</td>
                                    </tr>
                                </table>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="mt-4">
                <Row className="clientview-row">
                    <Col xl={12} lg={12} md={12} xs={12} sm={12}>
                        <div className="basicinfo-clientview-section">
                            <Row className="pl-4">
                                <h5>Contactos de emergencias</h5>
                            </Row>

                            <Row>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Nombre</label>
                                    <input placeholder="Nombre completo"></input>
                                </Col>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Teléfono</label>
                                    <input placeholder="Teléfono"></input>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Nombre</label>
                                    <input placeholder="Nombre completo"></input>
                                </Col>
                                <Col md={6} xs={12} sm={12}>
                                    <label>Teléfono</label>
                                    <input placeholder="Teléfono"></input>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default ClientView;