import { SET_CURRENT_USER, USER_LOADING, SET_SUCCESSFUL_REGISTER, CLEAR_REGISTER } from '../actions/types';

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_SUCCESSFUL_REGISTER:
      return {
        ...state,
        registerDone: true
      }
    case CLEAR_REGISTER:
      return {
        ...state,
        registerDone: null
      }
    default:
      return state;
  }
}
