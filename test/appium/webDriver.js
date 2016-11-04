import wd from 'wd';
import {spawn} from 'child_process';
import net from 'net';
import fs from 'fs';
import path from 'path';
import {APPIUM_PORT, WEBDRIVER_CAPS, IS_TRAVIS} from './testConfig';

const APP_DIR = path.resolve('.');

let driver;

export function getDriver() {
	return driver;
}

export function createDriver() {
	if (driver) {
		return Promise.resolve(driver);
	}
	return buildApp()
		.then(() => startAppium())
		.then(() => waitPort(APPIUM_PORT))
		.then(createWebDriver)
}
export function stop() {
	return driver && driver.quit()
			.catch(e => {});
}
function buildApp() {
	console.log('building native application');
	try {
		const buildDir = fs.readdirSync(APP_DIR + '/' + WEBDRIVER_CAPS.app);
		if (buildDir.length) {
			console.log('build exist, skipping build');
			return Promise.resolve();
		}
	} catch (e) {}

	return new Promise(resolve => {
		const build = spawn(APP_DIR + '/scripts/build-tests.sh');
		build.on('close', resolve);
		build.stdout.pipe(process.stdout);
		build.stderr.pipe(process.stderr);
	});
}

function logsHandler(driver) {
	driver.on('status', info => {
		console.log(info);
	});
	driver.on('command', (meth, path, data) => {
		console.log(' > ' + meth, path, data || '');
	});
	driver.on('http', (meth, path, data) => {
		console.log(' > ' + meth, path, data || '');
	});
}

function startAppium() {
	return checkPort(APPIUM_PORT).catch(e => new Promise(resolve => {
		const p = spawn('appium');
		process.on('exit', () => {
			p.kill('SIGHUP');
		});
		p.stderr.pipe(process.stderr);
		if (IS_TRAVIS) {
			//p.stdout.pipe(process.stdout);
		}
		resolve();
	}));
}

function checkPort(port) {
	return new Promise((resolve, reject) => {
		const client = net.connect(port, resolve);
		client.on('error', err => {
			client.destroy();
			reject();
		});
	})
}

function waitPort(port) {
	return checkPort(port).catch(e => new Promise((resolve, reject) => {
		setTimeout(() => waitPort(port).then(resolve, reject))
	}));
}

function createWebDriver() {
	const serverConfig = {
		host: 'localhost',
		port: 4723
	};
	driver = wd.promiseChainRemote(serverConfig);
	logsHandler(driver);
	return driver.init(WEBDRIVER_CAPS);
}
