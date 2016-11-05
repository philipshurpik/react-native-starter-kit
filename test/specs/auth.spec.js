const {getDriver, runApp, unAuthorize} = appiumUtils;
const {CREDENTIALS} = testConfig;

describe('integration auth', () => {

	runApp();
	unAuthorize();

	it('should login', () => {
		return getDriver()
			.waitForElementByAccessibilityId('Login')

			.elementByClassName('UIATextField')
			.setImmediateValue(CREDENTIALS.username)

			.elementByClassName('UIASecureTextField')
			.setImmediateValue(CREDENTIALS.password)

			.elementByAccessibilityIdIfExists('LoginButton')
			.click()

			.waitForElementByAccessibilityId('Dashboard')
	});

});
