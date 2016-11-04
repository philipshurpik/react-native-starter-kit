#!/usr/bin/env bash
set -e

. scripts/merge-master.sh

echo '=================='
echo pull    "$PULL"
echo email   "$EMAIL"
echo name    "$NAME"
echo message "$MESSAGE"
echo '=================='


if [[ $TRAVIS_BRANCH = release || $TRAVIS_BRANCH =~ ^ready\/.+ ]]; then
	npm run eslint
	defaults write com.apple.iphonesimulator ConnectHardwareKeyboard -bool NO
	echo "Building native app"
	export IOS_VERSION="9.3"
	export DEVICE_NAME="iPhone 6s"
	$(dirname $0)/./build-tests.sh > /dev/null
	npm test
fi

if [[ $TRAVIS_BRANCH = master || $TRAVIS_BRANCH = release ]]; then
	gem update match
	gem update gym
	gem update pilot
	gem update fastlane
	# Force bundler 1.12.5 because version 1.13 has issues, see https://github.com/fastlane/fastlane/issues/6065#issuecomment-246044617
  	gem uninstall bundler -v '>1.12.5' --force || echo "bundler >1.12.5 is not installed"
  	gem install bundler -v 1.12.5 --no-rdoc --no-ri --no-document --quiet

	/usr/libexec/PlistBuddy -c "Set CFBundleVersion $TRAVIS_BUILD_NUMBER" ./ios/Debitoor/Info.plist

	if [[ $TRAVIS_BRANCH = master ]]; then
		npm run deploy-staging
	fi

	if [[ $TRAVIS_BRANCH = release ]]; then
		npm run deploy-release
	fi
fi

. scripts/merge-into-master.sh
