const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
const cachingTransform = require('caching-transform');
const ignore = /node_modules\/(?!(react-tools|react-native-.*|texts)\/)/;

require('react-native/packager/react-packager/src/Resolver/polyfills/babelHelpers.js');
require('asset-require-hook')({
	extensions: ['png', 'jpg'],
	name: '[name].[ext]?[sha512:hash:base64:7]'
});

global.__DEV__ = true;

const cachedtransform = cachingTransform({
	cacheDir: './test_cache/',
	ext: '.js',
	transform: (input, meta) => babel.transform(input, meta).code
});

require.extensions['.js'] = function (module, filename) {
	if (filename.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
		filename = path.resolve('./test/utils/react-native.js');
	}
	const src = fs.readFileSync(filename, 'utf8');
	if (ignore && ignore.test(filename)) {
		return module._compile(src, filename);
	}
	const result = cachedtransform(src, {
		filename,
		sourceFileName: filename,
		presets: ['react-native'],
		plugins: [
			['babel-plugin-module-alias', [
				{src: './app/common', expose: 'common'},
				{src: './app/', expose: 'app'}
			]]
		]
	});

	module._compile(result, filename);
};
