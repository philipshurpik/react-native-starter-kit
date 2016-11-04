const {authorize, redirect, runApp} = appiumUtils;

describe('profile', () => {

	runApp();
	authorize();

	it('should open and render profile page', () => {
		return redirect('profilePage')
			.waitForElementByAccessibilityId('Profile');
	});
});