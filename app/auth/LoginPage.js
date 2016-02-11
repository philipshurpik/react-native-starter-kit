import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from './auth.actions';
import Login from './components/Login';

function mapStateToProps(state) {
    return {
        errorStatus: state.auth.errorStatus
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);