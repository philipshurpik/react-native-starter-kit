#!/usr/bin/env bash
set -e

. scripts/merge-master.sh

echo '=================='
echo pull    "$PULL"
echo email   "$EMAIL"
echo name    "$NAME"
echo message "$MESSAGE"
echo '=================='


if [[ $TRAVIS_BRANCH = master || $TRAVIS_BRANCH =~ ^ready\/.+ ]]; then
	npm run eslint
	defaults write com.apple.iphonesimulator ConnectHardwareKeyboard -bool NO
	echo "Building native app"
	export IOS_VERSION="9.3"
	export DEVICE_NAME="iPhone 6s"
	$(dirname $0)/./build-tests.sh > /dev/null
	npm test

	gem update fastlane
	/usr/libexec/PlistBuddy -c "Set CFBundleVersion $TRAVIS_BUILD_NUMBER" ./ios/ReactNativeStarterKit/Info.plist
	npm run deploy-staging
fi

. scripts/merge-into-master.sh
