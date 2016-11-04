import React from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import store from "./store";
import Routes from "./Routes";
import TestRunner from './TestRunner';

const Root = () => console.warn('error', process) || (
	<Provider store={store}>
		<View style={{flex: 1}}>
			{global.__TEST__ && <TestRunner/>}
			<Routes />
		</View>
	</Provider>
);

export default Root;