const {getDriver, authorize, runApp} = appiumUtils;

describe('dashboard', () => {

	runApp();
	authorize();

	it('should get counter value', () => {
		return getDriver()
			.waitForElementByAccessibilityId('Dashboard')
			.elementByAccessibilityId('CounterValue')
			.getValue()
			.then(amount => expect(amount).to.equal('0'))
	});

	it('should update counter', () => {
		return getDriver()
			.waitForElementByAccessibilityId('Dashboard')

			.elementByAccessibilityId('CounterPlus')
			.click()
			.elementByAccessibilityId('CounterPlus')
			.click()
			.elementByAccessibilityId('CounterMinus')
			.click()

			.elementByAccessibilityId('CounterValue')
			.getValue()
			.then(amount => expect(amount).to.equal('1'))
	});
});
