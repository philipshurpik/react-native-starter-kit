import {combineReducers} from "redux";
import auth from "./auth/auth.reducer";
import dashboard from "./dashboard/dashboard.reducer";
import identity from "./auth/identity.reducer";
import storage from "./storage/storage.reducer";

const rootReducer = combineReducers({
	auth,
	dashboard,
	identity,
	storage
});

export default rootReducer;