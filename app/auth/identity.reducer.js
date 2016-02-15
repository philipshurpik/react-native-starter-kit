import {AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGOUT_SUCCESS} from './auth.actions';

export default function identity(state = {username: ''}, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {username: action.payload.username};
        case AUTH_LOGIN_FAIL:
            return {};
        case AUTH_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}