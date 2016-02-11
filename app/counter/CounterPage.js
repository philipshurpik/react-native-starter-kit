import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from './components/Counter';
import * as counterActions from './counter.actions';
import {Actions} from 'react-native-router-flux';

function mapStateToProps(state) {
    return {
        counter: state.counter,
        openProfile: Actions.profilePage
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(counterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

