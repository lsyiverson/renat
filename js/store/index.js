import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {userListReducer, userFilterReducer} from '../reducers/userListReducer';

const promiseMiddleware = ()=> (next) => (action) => {
  if(typeof action.then === 'function') {
    return Promise.resolve(action).then(next);
  }
  return next(action);
};

export default createStore(combineReducers({
  userList: userListReducer,
  filter: userFilterReducer
}), compose(applyMiddleware(thunk)));