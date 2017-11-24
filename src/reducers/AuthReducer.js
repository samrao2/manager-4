//this is importing the email changed variable instead of the string in the action
import { EMAIL_CHANGED,
         PASSWORD_CHANGED
 } from '../actions/types';

//we need to do this otherwise the initial value will be undefined and the
//action will not work
const INITIAL_STATE = {
  email: '',
  password: ''
};

//this is the reducer below, its got 2 arguments, the state and action
export default (state = INITIAL_STATE, action) => {
  console.log(action);
//this switch statement switches over the action type, and depending on type
//the action decides what to do with it
  switch (action.type) {
    case EMAIL_CHANGED:
    console.log('action!');
//make a new object, take all the properties of my current object and include in
//that new object and take the email action.payload and include/overwrite that
//in the new object created
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
  //if none of the cases come out to be true above, it will default to the
  //beginning state with no changes
    default:
      return state;
  }
};
