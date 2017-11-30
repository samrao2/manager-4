import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
//reduxthnunk is helping us with aync operations, its a middlware
//to help with this middleware we need a ahelper from Redux library
//
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/common';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCCEY-CD1iSpSowupPZJcSuHEQ_yLvVzhg',
    authDomain: 'manager-2714d.firebaseapp.com',
    databaseURL: 'https://manager-2714d.firebaseio.com',
    projectId: 'manager-2714d',
    storageBucket: 'manager-2714d.appspot.com',
    messagingSenderId: '191493388327'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <Router />
        </Provider>
    );
  }
}
//this is a comment
//this is the second comment
//this is a third comment
//this is a fourth comment
export default App;
