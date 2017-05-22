import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyricsReducer';
import playerReducer from './reducers/playerReducer';

const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware)

export default createStore(
  combineReducers({lyrics: lyricsReducer, player: playerReducer}),
  middleware);
