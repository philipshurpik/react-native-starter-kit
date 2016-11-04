#!/bin/bash
CWD=$(dirname $0)
REACT_NATIVE_DIR="$CWD/../node_modules/react-native"
DEST=$CONFIGURATION_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH
echo $DEST

ENTRY_FILE=${1:-index.ios.js}
OUTPUT_FILE="main.jsbundle"
if [[ $TEST == 1 ]]; then
  ENTRY_FILE=${1:-index.tests.ios.js}
  OUTPUT_FILE="main.tests.jsbundle"
fi;
echo $ENTRY_FILE
echo $OUTPUT_FILE

echo "Building custom js bundle"
set -x

node "$REACT_NATIVE_DIR/local-cli/cli.js" bundle \
  --entry-file "$ENTRY_FILE" \
  --platform ios \
  --dev false \
  --bundle-output "$DEST/$OUTPUT_FILE" \
  --assets-dest "$DEST" \
  --sourcemap-output "$DEST/$OUTPUT_FILE.map"

if [[ ! -f "$DEST/$OUTPUT_FILE" ]]; then
  echo "error: File $DEST/$OUTPUT_FILE does not exist. This must be a bug with packager"
  exit 2
fi

echo "Build finish"
