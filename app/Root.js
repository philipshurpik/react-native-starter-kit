import React, {Component, View, Text} from 'react-native'
import { Provider } from 'react-redux';
import store from './store';
import CounterPage from './counter/CounterPage';
import LoginPage from './auth/LoginPage';
import Loader from './loader/Loader';

const Root = () => (
    <Provider store={store}>
        <View>
            <LoginPage />
            <Loader />
        </View>
    </Provider>
);

export default Root;