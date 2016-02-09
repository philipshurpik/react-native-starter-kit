import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

export default store;