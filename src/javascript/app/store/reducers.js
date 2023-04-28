import { combineReducers } from 'redux';
import example from './reducers/exampleReducer.js';
import message from './reducers/messageReducer.js';

export default combineReducers({
  example,
  message,
});
