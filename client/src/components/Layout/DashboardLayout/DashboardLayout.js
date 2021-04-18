import React from 'react';
import { Provider } from 'react-redux';

import { Switch, useRouteMatch } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute'

import Sidebar from '../Sidebar';

import Calendar from '../../Calendar';
import ClientDashboard from '../../Clients/ClientDashboard';

import { useDispatch } from 'react-redux';
import { CHANGE_SIDEBAR_VISIBILITY } from '../../../actions/types';

import store from '../../../store';

import './DashboardLayout.css';

const DashboardLayout = () => {

  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();

  const popSidebar = () => {
    dispatch({
      type: CHANGE_SIDEBAR_VISIBILITY
    });
  }

  return (
    <div id="dashboard-content">
      <Sidebar></Sidebar>
      <div className="full-size-div">
        <main className="calendar-contain">
          <Sidebar />
          <section className="title-bar">
            <button className="title-bar__burger" onClick={popSidebar}>
              <span className="burger__lines">
                Toggle Menu
                    </span>
            </button>
          </section>
          <Switch>
            <PrivateRoute exact path={path} component={Calendar} />
            <PrivateRoute exact path={`${path}/alumnos`} component={ClientDashboard} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
