import axios from 'axios';

export const listUsers = () => (dispatch) => {
  const token = localStorage.getItem('jwtToken');
  const data = {
    token,
  };

  return axios.post('/api/users/list', data).then((res) => {
    return res.data;
  });
};

export const changeStatus = (id) => (dispatch) => {
  const token = localStorage.getItem('jwtToken');
  const data = {
    token,
    id,
  };

  return axios.post('/api/users/activate', data).then((res) => {
    return res.data;
  });
};
