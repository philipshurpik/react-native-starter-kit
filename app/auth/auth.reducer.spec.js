import auth, {INITIAL_STATE} from "./auth.reducer";
import * as types from './auth.actions';

describe('auth.reducer', () => {
	it('should set token on login success', () => {
		const action = {
			type: types.AUTH_LOGIN_SUCCESS,
			payload: {token: '111'}
		};

		expect(auth(INITIAL_STATE, action)).to.be.deep.equal({
			...INITIAL_STATE,
			token: '111',
			loading: false
		});
	});
});