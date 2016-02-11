import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from './components/Counter';
import actions from 'actions';

function mapStateToProps(state) {
    return {
        counter: state.counter,
        openProfile: actions.router.profilePage
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions.counter, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

