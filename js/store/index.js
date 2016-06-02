import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userListReducer} from '../reducers/userListReducer';

const promiseMiddleware = ()=> (next) => (action) => {
  if(typeof action.then === 'function') {
    return Promise.resolve(action).then(next);
  }
  return next(action);
};

export default createStore(userListReducer, compose(applyMiddleware(thunk)));