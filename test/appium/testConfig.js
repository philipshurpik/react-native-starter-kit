export const IS_TRAVIS = process.env.TRAVIS;
process.env.IOS_VERSION = process.env.IOS_VERSION || '10.0';
process.env.DEVICE_NAME = process.env.DEVICE_NAME || 'iPhone 7';

const APP_NAME = 'ReactNativeCITest.app';
const CONFIGURATION = IS_TRAVIS ? 'Release' : 'Debug';
export const WEBDRIVER_CAPS = {
	newCommandTimeout: 60,
	browserName: '',
	platformName: 'iOS',
	platformVersion: process.env.IOS_VERSION,
	deviceName: process.env.DEVICE_NAME,
	app: `ios/build/Build/Products/${CONFIGURATION}-iphonesimulator/${APP_NAME}`,
	locale: 'en_US',
	language: 'en',
	autoAcceptAlerts: true
};
export const APPIUM_PORT = 4723;

export const CREDENTIALS = {
	email: 'test@gmail.com',
	password: 'password',
	token: '32q423423423rdsdsa'
};

export const actions = {
	login: {
		actions: [{
			type: 'AUTH_LOGIN_SUCCESS',
			payload: {token: CREDENTIALS.token}
		}],
		redirects: [{name: 'homePage'}]
	},
	logout: {
		actions: [{type: 'AUTH_LOGOUT'}],
		redirects: [{name: 'startPage', params: {duration: 0}}]
	}
};