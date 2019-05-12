import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello from manager app!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
