import {AUTH_LOGIN_FAIL, AUTH_LOGIN_SUCCESS} from './auth.actions';

export default function auth(state = {login: false, errorStatus: ''}, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                login: true,
                errorStatus: ''
            };
        case AUTH_LOGIN_FAIL:
            return {
                ...state,
                login: false,
                errorStatus: action.payload.message
            };
        default:
            return state;
    }
}