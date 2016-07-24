import {persistStore, autoRehydrate} from "redux-persist";
import {applyMiddleware, createStore, compose} from "redux";
import {AsyncStorage} from "react-native";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./rootReducer";

const logger = createLogger();
const persistVersion = 1;

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk, logger),
	autoRehydrate()
));

checkPersistVersion()
	.then(() => persistStore(store, {storage: AsyncStorage}));

export default store;


function checkPersistVersion() {
	return AsyncStorage.getItem('persistVersion')
		.then(deviceVersion => {
			if (persistVersion > Number(deviceVersion)) {
				return AsyncStorage.getAllKeys()
					.then(keys => keys.filter(item => item != "reduxPersist:auth"))
					.then(keys => AsyncStorage.multiRemove(keys));
			}
		});
}