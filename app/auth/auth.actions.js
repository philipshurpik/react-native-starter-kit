import * as loaderActions from '../loader/loader.actions';

export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';

export function login(username) {
    return dispatch => asyncWrapper(dispatch, () => {
        if (username.length) {
            return dispatch(loginSuccess(username));
        }
        return dispatch(loginFail(new Error('username field is required')));
    });
}

export function logout() {
    // TODO: implement
}

function asyncWrapper(dispatch, callback) {
    dispatch(loaderActions.showLoader());

    return setTimeout(() => {
        dispatch(loaderActions.hideLoader());
        callback();
    }, 1000)
}

function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
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

