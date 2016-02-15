import {router} from 'actions';

export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';

export function login(username) {
    return dispatch => asyncWrapper(() => {
        if (username.length) {
            router.homePage();
            return dispatch(loginSuccess(username));
        }
        return dispatch(loginFail(new Error('username field is required')));
    });
}

export function logout() {
    return dispatch => asyncWrapper(() => {
        router.loginPage();
        return dispatch(logoutSuccess());
    })
}

function asyncWrapper(callback) {
    router.loading();

    return setTimeout(() => {
        callback();
        router.dismiss();
    }, Math.random() * 1000)
}

function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
            token: Math.random().toString(),
            username: username
        }
    }
}

function loginFail(error) {
    return {
        type: AUTH_LOGIN_FAIL,
        payload: error,
        error: true
    }
}

function logoutSuccess() {
    return {
        type: AUTH_LOGOUT_SUCCESS
    }
}