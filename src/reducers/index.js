import { combineReducers } from 'redux';
//this is linking the authreducers from the other file
//to this file, which brings all reducers together
import AuthReducer from './AuthReducer';

//this call exports all reducers
export default combineReducers({
//the key from the pair below is what is carrying the state
//this is like saying "the "auth" piece of state is produced by the authreducer
  auth: AuthReducer,
});
