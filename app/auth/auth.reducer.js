import * as types from './auth.actions';

export default function auth(state = {token: null, errorStatus: ''}, action) {
    switch (action.type) {
        case types.AUTH_LOGIN_START:
            return {
                ...state,
                loading: true,
                errorStatus: ''
            };
        case types.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token
            };
        case types.AUTH_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                token: null,
                errorStatus: action.payload.message
            };
        case types.AUTH_LOGOUT:
            return {
                ...state,
                token: null
            };
        default:
            return state;
    }
}