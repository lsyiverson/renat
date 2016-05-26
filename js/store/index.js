import {createStore} from 'redux';
import {userListReducer} from '../reducers/userListReducer';

export default createStore(userListReducer);