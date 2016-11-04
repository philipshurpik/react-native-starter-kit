#!/bin/bash
if [[ $TRAVIS ]]; then
	CONFIGURATION=Release
else
	CONFIGURATION=Debug
fi;
echo "***** Building $CONFIGURATION configuration *****"
xcodebuild \
	-project ios/ReactNativeStarterKit.xcodeproj \
	-scheme ReactNativeStarterKit \
	-configuration $CONFIGURATION TEST=1 \
	-destination "platform=iOS Simulator,OS=$IOS_VERSION,name=$DEVICE_NAME" \
	-derivedDataPath ios/build
