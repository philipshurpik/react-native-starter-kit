import ReactNative from 'react-native-mock/build/react-native';

Object.assign(ReactNative.NativeModules, {
	// here you can mock some native modules (react-native plugins)
	// for example like this
	RNDeviceInfo: {
		deviceCountry: 'ua'
	}
});

module.exports = ReactNative;