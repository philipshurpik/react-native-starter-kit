import {combineReducers} from "redux";
import auth from "./auth/auth.reducer";
import counter from "./dashboard/counter.reducer";
import identity from "./auth/identity.reducer";
import storage from "./storage/storage.reducer";

const rootReducer = combineReducers({
	auth,
	counter,
	identity,
	storage
});

export default rootReducer;