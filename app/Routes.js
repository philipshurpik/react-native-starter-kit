import React, {Navigator} from 'react-native'
import {Router, Route, Schema, Animations, Actions, TabBar} from 'react-native-router-flux';
import { connect } from 'react-redux';

import HomePage from './home/HomePage';
import LoginPage from './auth/LoginPage';
import ProfilePage from './profile/ProfilePage';
import Loader from './navigation/loader/Loader';

const AppRouter = connect()(Router);

const Routes = ({loading, needSignIn}) => (
    loading ?
        <Loader/> :
        <AppRouter>
            <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
            <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

            <Route name="loginPage" initial={needSignIn} component={LoginPage} title="Login" type="reset"/>

            <Route name="homePage" initial={!needSignIn} component={HomePage} title="Home" type="replace"/>
            <Route name="profilePage" component={ProfilePage} title="Profile"/>

            <Route name="loading" type="modal" component={Loader}/>
        </AppRouter>
);

function mapStateToProps(state) {
    return {
        loading: !state.navigation.storageLoaded,
        needSignIn: !state.auth.token
    }
}

export default connect(mapStateToProps)(Routes);