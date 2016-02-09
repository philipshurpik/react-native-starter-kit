import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

const logger = createLogger();
const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);

export default store;