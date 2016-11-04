import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import Routes from "./Routes";

const Root = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);

export default Root;