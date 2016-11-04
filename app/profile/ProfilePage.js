import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Profile from "./components/Profile";
import * as authActions from "app/auth/auth.actions";

function mapStateToProps(state) {
	return {
		identity: state.identity
	}
}

function dispatchToProps(dispatch) {
	return bindActionCreators({logout: authActions.logout}, dispatch);
}

export default connect(mapStateToProps, dispatchToProps)(Profile);

