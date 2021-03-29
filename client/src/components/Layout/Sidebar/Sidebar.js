import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../../actions/authActions';


import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(true);

  const logout = () => {
    dispatch(logoutUser());
  }


  return (
    <div
      style={{ width: hidden ? '50px' : '250px' }}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      className="sidebar">
      {!hidden &&
        <React.Fragment>
          <div className="sidebar-element">Alumnos</div>
          <div className="sidebar-element">Horarios</div>
          <div className="sidebar-element">Profesores</div>
          <div className="sidebar-element" onClick={logout}>Cerrar sesión</div>
        </React.Fragment>
      }
      {hidden &&
        <div className="icon-wrapper">
          <i className="fa fa-bars"></i>
        </div>
      }
    </div>
  );
};

export default Sidebar;
