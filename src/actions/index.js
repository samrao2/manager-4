import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER
 } from './types';


//whenever the const variable below (action creator) is called
//it will be called with some amount of text and it returns an action, the text
//which is entered as an argument becomes the payload below
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  //since we are using redux thunk/ async, the action creator now returns a function
  //instead of an object. Redux Thunk will see that this is a function and run it
  //the "then" will dispatch once the function is finisehd running
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
  };
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
Actions.main();
};
