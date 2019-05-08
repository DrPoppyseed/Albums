import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyBMzks41qcwcPX_qbw2QQfPbhLp-PEo2cs",
    authDomain: "auth-a8b8a.firebaseapp.com",
    databaseURL: "https://auth-a8b8a.firebaseio.com",
    projectId: "auth-a8b8a",
    storageBucket: "auth-a8b8a.appspot.com",
    messagingSenderId: "393931736183",
    appId: "1:393931736183:web:ae0438adbb3aa95b"
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Auth app</Text>
      </View>
    );
  }
}

export default App;
