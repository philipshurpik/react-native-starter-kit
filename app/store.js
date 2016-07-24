import {persistStore, autoRehydrate} from "redux-persist";
import {applyMiddleware, createStore, compose} from "redux";
import {AsyncStorage} from "react-native";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./rootReducer";

const logger = createLogger();

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk, logger),
	autoRehydrate()
));

persistStore(store, {storage: AsyncStorage});

export default store;