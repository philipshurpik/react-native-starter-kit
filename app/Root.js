import React from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import store from "./store";
import Routes from "./Routes";
import TestRunner from './TestRunner';

const Root = ({testRunner}) => (
	<Provider store={store}>
		<View style={{flex: 1}}>
			{Boolean(testRunner) && <TestRunner/>}
			<Routes />
		</View>
	</Provider>
);

export default Root;