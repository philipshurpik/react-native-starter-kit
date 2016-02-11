import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Profile from './components/Profile';
import actions from 'actions';

function mapStateToProps(state) {
    return {
        identity: state.identity
    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({logout: actions.auth.logout}, dispatch);
}

export default connect(mapStateToProps, dispatchToProps)(Profile);

