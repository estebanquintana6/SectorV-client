import React from 'react';

import Dashboard from '../Dashboard';

import { Col, Row, Container } from 'react-bootstrap';
import './DashboardLayout.css';

const DashboardLayout = ({}) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="px-0" xs={12} md={12}>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
