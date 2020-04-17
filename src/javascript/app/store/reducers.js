import { combineReducers } from 'redux';
import example from './reducers/exampleReducer';
import message from './reducers/messageReducer';

export default combineReducers({
  example,
  message,
});
