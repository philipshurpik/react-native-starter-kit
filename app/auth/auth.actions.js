import {Actions as routes} from 'react-native-router-flux';

export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';

export const login = username => {
    return dispatch => asyncWrapper(() => {
        if (username.length) {
            routes.homePage();
            return dispatch(loginSuccess(username));
        }
        return dispatch(loginFail(new Error('username field is required')));
    });
};

export const logout = () => {
    return dispatch => asyncWrapper(() => {
        routes.loginPage();
        return dispatch(logoutSuccess());
    })
};

function asyncWrapper(callback) {
    return setTimeout(callback, Math.random() * 1000 + 100)
}

const loginSuccess = username => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
            token: Math.random().toString(),
            username: username
        }
    }
};

const loginFail = error => {
    return {
        type: AUTH_LOGIN_FAIL,
        payload: error,
        error: true
    }
};

const logoutSuccess = () => {
    return {
        type: AUTH_LOGOUT_SUCCESS
    }
};