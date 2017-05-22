import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware)

export default createStore(reducer, middleware);
