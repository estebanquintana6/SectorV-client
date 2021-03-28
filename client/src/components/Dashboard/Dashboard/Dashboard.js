import React from 'react';

import { Button, Container } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { logoutUser } from '../../../actions/authActions';
import { connect } from 'react-redux';

const Dashboard = ({ logoutUser }) => {

    const logout = () => {
        logoutUser();
    }

    return (
        <Container>
            <div className="text-center mt-5">
                <h1 className="primary-dark">Tienes una sesión activa</h1>
            </div>
            <div className="mx-5 mt-3">
                <Button onClick={logout}>Logout</Button>
            </div>
        </Container>

    );
};

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
