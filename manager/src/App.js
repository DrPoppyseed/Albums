import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA2BhVm9KGxIgqeZSZm1YR6dXmIU6Ye2WA",
      authDomain: "manager-29bcb.firebaseapp.com",
      databaseURL: "https://manager-29bcb.firebaseio.com",
      projectId: "manager-29bcb",
      storageBucket: "manager-29bcb.appspot.com",
      messagingSenderId: "106326520617",
      appId: "1:106326520617:web:37ce412a33a6bd2a"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
