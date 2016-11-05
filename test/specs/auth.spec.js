const {getDriver, runApp, unAuthorize} = appiumUtils;
const {CREDENTIALS} = testConfig;

describe('integration auth', () => {

	runApp();
	unAuthorize();

	it('should login', () => {
		return getDriver()
			.waitForElementByAccessibilityId('Login')

			.elementByClassName('UIATextField')
			.setImmediateValue(CREDENTIALS.email)

			.elementByClassName('UIASecureTextField')
			.setImmediateValue(CREDENTIALS.password)

			.elementByAccessibilityIdIfExists('LoginButton')
			.click()

			.waitForElementByAccessibilityId('Dashboard')
	});

});
