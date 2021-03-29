import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import sidebarReducer from './SidebarReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  sidebar: sidebarReducer
});
