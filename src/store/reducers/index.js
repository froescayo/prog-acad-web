import { combineReducers } from '../utils';
import { authReducer as auth } from './auth';

export default combineReducers({
    auth
});