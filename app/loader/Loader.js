import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoaderSpinner from './components/LoaderSpinner';
import * as loaderActions from './loader.actions';

function mapStateToProps(state) {
    return {
        loading: state.loader
    }
}

export default connect(mapStateToProps)(LoaderSpinner);

