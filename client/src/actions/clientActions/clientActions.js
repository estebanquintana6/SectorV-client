import axios from 'axios';

import { SET_SUCCESSFUL_CLIENT_REGISTER, GET_CLIENT_REGISTER_ERRORS } from '../types';

export const registerClient = (data) => (dispatch) => {
    axios
        .post('/api/clients/register', data)
        .then((res) => {
            dispatch({
                type: SET_SUCCESSFUL_CLIENT_REGISTER
            })
        })
        .catch((err) =>
            dispatch({
                type: GET_CLIENT_REGISTER_ERRORS,
                payload: err.response.data,
            })
        );
}