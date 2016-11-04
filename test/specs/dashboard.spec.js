const {getDriver, authorize, runApp} = appiumUtils;

describe('dashboard', () => {

	runApp();
	authorize();

	it('should get counter value', () => {
		return getDriver()
			.waitForElementByAccessibilityId('Dashboard')
			.elementByAccessibilityId('Amount')
			.getValue()
			.then(amount => expect(amount).to.equal('0'))
	});

	it('should update counter', () => {
		return getDriver()
			.waitForElementByAccessibilityId('Dashboard')

			.elementByAccessibilityId('CounterPlus')
			.click()

			.elementByAccessibilityId('Amount')
			.getValue()
			.then(amount => expect(amount).to.equal('1'))
	});
});
