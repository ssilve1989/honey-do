import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';

const NODE_ENV = process.env.NODE_ENV || 'development';

const middlewares = [];

if(NODE_ENV !== 'production') {
	middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));
export default store;