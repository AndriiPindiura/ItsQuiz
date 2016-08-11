import { combineReducers } from 'redux';
import runtime from './runtime';
import movies from './movies';
export default combineReducers({ runtime, movies });
