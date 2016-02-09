import React, {Component, View, Text} from 'react-native'
import { Provider } from 'react-redux';
import store from './store';
import CounterPage from './counter/CounterPage';

const Root = () => (
    <Provider store={store}>
        <CounterPage />
    </Provider>
);

export default Root;