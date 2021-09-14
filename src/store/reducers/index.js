import { combineReducers } from '../utils';
import { authReducer as auth } from './auth';
import { commonReducer as common } from './common';

export default combineReducers({
    auth,
    common
});