/**
 * @providesModule actions
 */
import {Actions} from 'react-native-router-flux';
import * as auth from './auth/auth.actions';
import * as counter from './counter/counter.actions';

module.exports = {
    auth,
    counter,
    router: Actions
};