import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Dashboard from "./components/Dashboard";
import {Actions as routes} from "react-native-router-flux";
import * as actions from "./dashboard.actions";

function mapStateToProps(state) {
	return {
		counter: state.dashboard.counter,
		openProfile: routes.profilePage
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

