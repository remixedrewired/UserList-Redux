import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-selected-user';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;




