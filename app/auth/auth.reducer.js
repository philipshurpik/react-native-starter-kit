import {AUTH_LOGIN_FAIL, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS} from './auth.actions';

export default function auth(state = {token: null, errorStatus: ''}, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                errorStatus: ''
            };
        case AUTH_LOGIN_FAIL:
            return {
                ...state,
                token: null,
                errorStatus: action.payload.message
            };
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                token: null
            };
        default:
            return state;
    }
}