#!/bin/bash

# Set DevServerIP
if [ ${CONFIGURATION} == "Debug" ]
then
	/usr/libexec/PlistBuddy -c "Set :devServerIP `ipconfig getifaddr en0`" ${PROJECT_DIR}/environment.plist
fi

# Set Test suffix for tests
if [ ${TEST} == 1 ]
then
	/usr/libexec/PlistBuddy -c "Set :testsSuffix '.tests'" ${PROJECT_DIR}/environment.plist
fi