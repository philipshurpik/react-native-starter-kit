import { combineReducers } from 'redux';
import auth from './auth/auth.reducer';
import counter from './counter/counter.reducer';
import identity from './auth/identity.reducer';
import loader from './loader/loader.reducer';

export default rootReducer = combineReducers({
    auth,
    counter,
    identity,
    loader
});