import {Actions as routes} from "react-native-router-flux";

export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const login = (username, password) => {
	return dispatch => {
		dispatch(loginStart());

		setTimeout(() => {
			if (username.length && password.length) {
				routes.homePage();
				return dispatch(loginSuccess(username, password));
			}
			return dispatch(loginFail(new Error('username and password fields are required')));
		}, Math.random() * 1000 + 500)
	};
};

const loginStart = () => {
	return {
		type: AUTH_LOGIN_START
	}
};

const loginSuccess = (username, password) => {
	return {
		type: AUTH_LOGIN_SUCCESS,
		payload: {
			token: Math.random().toString(),
			username,
			password
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

export const logout = () => {
	return dispatch => {
		routes.loginPage();
		dispatch({
			type: AUTH_LOGOUT
		});
	};
};