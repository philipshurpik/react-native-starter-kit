import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from './components/Login';
import actions from 'actions';

function mapStateToProps(state) {
    return {
        errorStatus: state.auth.errorStatus
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login: actions.auth.login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);