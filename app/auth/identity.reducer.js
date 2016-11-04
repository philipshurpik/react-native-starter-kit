import {AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGOUT} from "./auth.actions";

export default function identity(state = {username: ''}, action) {
	switch (action.type) {
		case AUTH_LOGIN_SUCCESS:
			return {username: action.payload.username};
		case AUTH_LOGIN_FAIL:
		case AUTH_LOGOUT:
			return {};
		default:
			return state;
	}
}