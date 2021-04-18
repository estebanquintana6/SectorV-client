import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../../actions/authActions';

import { selectSidebar } from '../../../utils/selectors';

import { CHANGE_SIDEBAR_VISIBILITY } from '../../../actions/types'


import './Sidebar.css';

const Sidebar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sidebarState = useSelector(selectSidebar);

  let { hidden } = sidebarState;


  const toRoute = (path) => {
    history.push(path);
    popSidebar();
  }


  const logout = () => {
    dispatch(logoutUser());
  }

  const popSidebar = () => {
    dispatch({
      type: CHANGE_SIDEBAR_VISIBILITY
    });
  }

  return (
    <div
      style={{ width: hidden ? '0px' : '20rem' }}
      className="sidebar">
      <div className="sidebar-element" onClick={() => toRoute('/dashboard')}>Calendario</div>
      <div className="sidebar-element" onClick={() => toRoute('/dashboard/alumnos')}>Alumnos</div>
      <div className="sidebar-element">Profesores</div>
      <div className="sidebar-element" onClick={logout}>Cerrar sesión</div>
    </div>
  );
};

export default Sidebar;
