import {FETCH_USER, FILTER_USER} from '../actions/userListAction';

import {AlertIOS} from 'react-native';

export function userListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return [...action.payload];
    default:
      return state;
  }
}

export function userFilterReducer(state = '', action) {
  switch (action.type) {
    case FILTER_USER:
      return action.filter;
    default:
      return state;
  }
}